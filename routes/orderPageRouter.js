const express = require('express');
const orderPageRouter = express.Router();
const {orderItemListController,postOrderItem, postCancelItem} = require('../controllers/odersPageController');

orderPageRouter.get('/order',orderItemListController);
orderPageRouter.post('/order',postOrderItem);
orderPageRouter.post('/order/cancel/:phoneId',postCancelItem);
exports.orderPageRouter = orderPageRouter;