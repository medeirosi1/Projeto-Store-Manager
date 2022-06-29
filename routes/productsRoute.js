const { Router } = require('express');
const productsController = require('../controllers/productsController');

const productRoute = Router();

productRoute.get('/', productsController.listProducts);

module.exports = productRoute;