const express = require('express');
const { logoutContoller } = require('../controllers/logoutController');
const logoutRouter = express.Router();

logoutRouter.post('/logout',logoutContoller);

exports.logoutRouter = logoutRouter;