const express = require('express');
const router = express.Router();
const authRoute=require('./../controller/auth.controller');

router.route('/registration').post(authRoute.registration);
router.route('/login').post(authRoute.login);


module.exports = router;


