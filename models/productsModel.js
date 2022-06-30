const connection = require('./connection');

const productsModel = {
  async listProducuts() {
    const query = 'SELECT * FROM StoreManager.products';
    const [items] = await connection.execute(query);
    return items;
  },
  
  async getProduct(id) {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ? ';
    const [[item]] = await connection.execute(query, [id]);
    return item;
  },

  async existsId(id) {
    const query = `
      SELECT 1
      FROM StoreManager.products 
      WHERE id = ?
    `;
    const [[exists]] = await connection.execute(query, [id]);
    return !!exists;
  },

};
module.exports = productsModel;