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

  async createProduct(req, res) {
    const name = await productsService.validateNameBody(req.body);
    if (name === null) return res.status(400).json({ message: '"name" is required' });
    if (name.name.length < 5) {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    } 
    const id = await productsService.createProduct(name);
    const item = await productsService.getProduct(id);
    res.status(201).json(item);
  },
  
  async editProduct(req, res) {
    const { id } = req.params;
    const name = await productsService.validateNameBody(req.body);
    if (name === null) return res.status(400).json({ message: '"name" is required' });
    if (name.name.length < 5) {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    } 
     if (!await productsModel.existsId(id)) { 
      return res.status(404).json({ message: 'Product not found' });
    }
    await productsService.editProduct(id, name);
    const item = await productsService.getProduct(id);
    res.status(200).json(item);
  },

  async removeProduct(req, res) {
    const { id } = req.params;
    if (!await productsModel.existsId(id)) { 
      return res.status(404).json({ message: 'Product not found' });
    }
    await productsService.removeProduct(id);
    res.sendStatus(204);
  },
};

module.exports = productsController;