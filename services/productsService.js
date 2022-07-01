const Joi = require('joi');
const productsModel = require('../models/productsModel');

const productsService = {
  validateNameBody(name) {
    const schema = Joi.object({
      name: Joi.string().required(),
    });

    const { error, value } = schema.validate(name);
    if (error) return null;
    return value;
  },

  async listProducuts() {
    const items = await productsModel.listProducuts();
    return items;
  },

  async getProduct(id) {
    const item = await productsModel.getProduct(id);
    return item;
  },

  async createProduct({ name }) {
    const id = await productsModel.createProduct({ name });
    return id;
  },

  async editProduct(id, change) {
    await productsModel.editProduct(id, change.name);
    return true;
  },

  async removeProduct(id) {
    await productsModel.removeProduct(id);
  },
};

module.exports = productsService;