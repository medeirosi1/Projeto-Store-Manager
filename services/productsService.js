const productsModel = require('../models/productsModel');

const productsService = {
  async listProducuts() {
    const items = await productsModel.listProducuts();
    return items;
  },
};

module.exports = productsService;