const productsModel = require('../models/productsModel');

const productsService = {
  async listProducuts() {
    const items = await productsModel.listProducuts();
    return items;
  },

  async getProduct(id) {
    const item = await productsModel.getProduct(id);
    return item;
  },
};

module.exports = productsService;