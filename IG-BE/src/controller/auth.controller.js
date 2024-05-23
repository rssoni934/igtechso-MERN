const Users = require('../models/user.model');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const signUp = async (req, res) => {
    const { name, email, Password } = req.body;
    try {
        let password = getHashedPassword(Password)
        const user = new Users({
            name, email, password
        })
        const response = await user.save();
        return res.json({
            statusCode: 201,
            message: "You Are Successfully Sign In"
        })
    } catch (err) {
        console.log("Error:", err);
        return res.status(500).json({
            error: err
        })
    }
}
const signIn = async (req, res) => {
    const { email, Password } = req.body;
    try {
        const password = getHashedPassword(Password);
        const user = await Users.findOne({email: email });
        if(user && user.password == password){
            // const authToken = generateAuthToken();
            const jwt_data = jwt.sign({user_id : user._id}, 'JWT_SECRET', { expiresIn : '1h'});
            return res.status(200).json({
                tocken : jwt_data,
                message: "You Are Successfully Login"
            })
        }else {
            return res.status(401).json({
                message: "Please Check Your Credentials!"
            })
        }
        
    } catch (err) {
        console.log("Error:", err);
        return res.status(500).json({
            error: err
        })
    }
}

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}


module.exports = {
    registration: signUp,
    login: signIn
};
