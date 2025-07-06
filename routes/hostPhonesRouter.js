const express = require('express');
const hostPhonesRouter = express.Router();
const {hostPhonesController} = require('../controllers/hostPhonesController');

hostPhonesRouter.get('/hostphone',hostPhonesController);
exports.hostPhonesRouter = hostPhonesRouter;