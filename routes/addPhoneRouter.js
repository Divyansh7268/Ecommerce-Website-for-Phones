const express = require('express');
const addPhoneRouter = express.Router();
const {addPhoneController} = require('../controllers/AddPhoneController');
const { AllPhoneData } = require('../controllers/submitController');


addPhoneRouter.get('/addphone',addPhoneController);
addPhoneRouter.post('/add-phone',AllPhoneData);

exports.addPhoneRouter = addPhoneRouter;