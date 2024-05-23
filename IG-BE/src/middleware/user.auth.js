const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "JWT_SECRET",
      async function (err, decode) {
        if (err) {
          req.user = undefined;
          return next();
        }

        console.log("decode", decode);
        try {
          const user = await User.findOne({
            _id: decode?.user_id,
          }).exec();
          console.log("user",user);
          req.user = user;
        } catch (err) {
          return res.status(500).send({
            message: err.message || "Internal server error",
          });
        }
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
};
module.exports = verifyToken;
