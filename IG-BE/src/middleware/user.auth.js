const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "JWT_SECRET",
      async function (err, decode) {
        if (err) {
          req.user = undefined;
          return res.status(404).send({
            message: "Authentication Fail"
          });
        }

        try {
          const user = await User.findOne({
            _id: decode?.user_id,
          }).exec();
          req.user = user;
          next();
        } catch (err) {
          return res.status(500).send({
            message: err.message || "Internal server error",
          });
        }
      }
    );
  } else {
    req.user = undefined;
    res.status(404).send({
      message: "Authentication Fail"
    });
  }
};
module.exports = verifyToken;
