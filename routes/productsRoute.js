const { Router } = require('express');
const productsController = require('../controllers/productsController');

const productRoute = Router();

productRoute.get('/', productsController.listProducts);
productRoute.get('/:id', productsController.getProduct);

module.exports = productRoute;