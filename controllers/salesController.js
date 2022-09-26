const salesService = require('../services/salesService');

const salesController = {
  async createSale(req, res) {
    const productId = await salesService.validateproductIdBody(req.body);
    const quantity = await salesService.validateQuantityBody(req.body);
    if (productId === null) return res.status(400).json({ message: '"productId" is required' });
    if (quantity === null) return res.status(400).json({ message: '"quantity" is required' });
    await salesService.createSale(data);
    res.status(201);
  },
};

module.exports = salesController;