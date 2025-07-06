const express = require('express');
const {homeController} = require('../controllers/homeController');
const homePageRouter = express.Router();

homePageRouter.get('/',homeController);

exports.homePageRouter = homePageRouter;