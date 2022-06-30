const productsService = require('../services/productsService');
const productsModel = require('../models/productsModel');

const productsController = {
  async listProducts(_req, res) {
    const items = await productsService.listProducuts();
    res.status(200).json(items);
  },

  async getProduct(req, res) {
    const { id } = req.params;
    if (!await productsModel.existsId(id)) { 
      return res.status(404).json({ message: 'Product not found' });
    }
    const item = await productsService.getProduct(id);
    res.status(200).json(item);
  },
};

module.exports = productsController;