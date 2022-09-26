const Joi = require('joi');
const salesModel = require('../models/salesModel');
const salesProductModel = require('../models/salesProductsModel');

const salesService = {
  validateproductIdBody(body) {
    const schema = Joi.object({
      productId: Joi.number().required(),
    });

    const { error, value } = schema.validate(body);
    if (error) return null;
    return value;
  },
    validateQuantityBody(body) {
    const schema = Joi.object({
      quantity: Joi.number().required(),
    });

    const { error, value } = schema.validate(body);
    if (error) return null;
    return value;
  },
  async createSale(productId, quantity) {
    const saleId = await salesModel.createSale();
    await salesProductModel.createSalesProducts(saleId, productId, quantity);
  },
};

module.exports = salesService;