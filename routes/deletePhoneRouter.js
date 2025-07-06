const express = require('express');
const deletePhoneRouter = express.Router();
const {postDeleteController} = require('../controllers/deleteController');

deletePhoneRouter.post('/delete/:phoneId',postDeleteController);

exports.deletePhoneRouter = deletePhoneRouter;