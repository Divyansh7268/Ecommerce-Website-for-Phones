const express = require('express');
const signInPageRouter = express.Router();
const {signInController , signInPostController} = require('../controllers/signInController');

signInPageRouter.get('/signin',signInController);
signInPageRouter.post('/signin',signInPostController);
exports.signInPageRouter = signInPageRouter;