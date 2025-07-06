const express = require('express');
const editPhoneRouter = express.Router();
const {editPhoneController, editPhoneData} = require('../controllers/editPhoneController');

editPhoneRouter.get('/editphone/:phoneId',editPhoneController);
editPhoneRouter.post('/editphone',editPhoneData);
exports.editPhoneRouter = editPhoneRouter;