const express = require('express');
const { viewCartController, postCartItem, postRemoveCartItem } = require('../controllers/viewCartController');
const viewCartRouter = express.Router();

viewCartRouter.get('/viewcart',viewCartController);
viewCartRouter.post('/viewcart',postCartItem);
viewCartRouter.post('/viewcart/:phoneId',postRemoveCartItem);
exports.viewCartRouter = viewCartRouter;
