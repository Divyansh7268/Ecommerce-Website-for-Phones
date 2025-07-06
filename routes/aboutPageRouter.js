const express = require('express');
const { aboutPageController } = require('../controllers/aboutPageController');
const aboutPageRouter = express.Router();

aboutPageRouter.get('/about',aboutPageController);

exports.aboutPageRouter = aboutPageRouter;