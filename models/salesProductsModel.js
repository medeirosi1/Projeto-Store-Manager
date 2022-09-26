const connection = require('./connection');

const salesProductsModel = {
  async createSalesProducts(saleId, productId, quantity) {
    const query = `INSERT INTO StoreManager.sales_products 
    (sale_id, product_id, quantity) VALUES (?, ?, ?)`;
    await connection.execute(query, [saleId, productId, quantity]);
  },
};

module.exports = salesProductsModel;