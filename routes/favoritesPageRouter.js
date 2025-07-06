const express = require('express');
const favoritesPageRouter = express.Router();
const {favoritesPageController, postFavoritesController, postFavRemoveController} = require('../controllers/favoritesPageController');

favoritesPageRouter.get('/favorites',favoritesPageController);
favoritesPageRouter.post('/favorites',postFavoritesController);
favoritesPageRouter.post('/favorites/:phoneId',postFavRemoveController);

exports.favoritesPageRouter = favoritesPageRouter;