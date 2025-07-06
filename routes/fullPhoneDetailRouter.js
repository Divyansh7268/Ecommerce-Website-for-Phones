const express = require('express');
const { fullPhoneDetailscontroller } = require('../controllers/fullPhoneDetailsController');
const fullPhoneDetialRouter = express.Router();

fullPhoneDetialRouter.get('/full-details/:phoneId',fullPhoneDetailscontroller);

exports.fullPhoneDetialRouter = fullPhoneDetialRouter;