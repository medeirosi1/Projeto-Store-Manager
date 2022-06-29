const productsService = require('../services/productsService');

const productsController = {
  async listProducts(_req, res) {
    const items = await productsService.listProducuts();
    res.status(200).json(items);
  },
};

module.exports = productsController;