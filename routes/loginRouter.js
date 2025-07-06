const express = require('express');
const loginRouter = express.Router();
const {loginController, postLoginController} = require('../controllers/loginController');

loginRouter.get('/login',loginController);
loginRouter.post('/login',postLoginController);


exports.loginRouter = loginRouter;