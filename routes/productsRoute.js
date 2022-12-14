const { Router } = require('express');
const productsController = require('../controllers/productsController');

const productRoute = Router();

productRoute.get('/', productsController.listProducts);
productRoute.get('/:id', productsController.getProduct);
productRoute.post('/', productsController.createProduct);
productRoute.put('/:id', productsController.editProduct);
productRoute.delete('/:id', productsController.removeProduct);

module.exports = productRoute;