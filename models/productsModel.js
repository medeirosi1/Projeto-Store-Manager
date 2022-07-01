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

  async createProduct({ name }) {
    const query = 'INSERT INTO StoreManager.products (name) VALUES (?)';
    const [{ insertId }] = await connection.execute(query, [name]);
    return insertId;
  },

  async editProduct(id, change) {
    const query = `UPDATE StoreManager.products 
    SET name = ?
    WHERE id = ? `;
    const [result] = await connection.execute(query, [change, id]);
    return result.affectedRows;
  },

  async removeProduct(id) {
    const query = 'DELETE FROM StoreManager.products WHERE id = ?';
    await connection.execute(query, [id]);
  },
};
module.exports = productsModel;