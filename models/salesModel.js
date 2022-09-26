const connection = require('./connection');

const salesModel = {
  async createSale() {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW())';
    await connection.execute(query);
  },
};

module.exports = salesModel;