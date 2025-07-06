const express = require('express');
const submitRouter = express.Router();
const { AllPhoneData} = require('../controllers/submitController');

submitRouter.post('/add-phone',AllPhoneData);



exports.submitRouter = submitRouter;