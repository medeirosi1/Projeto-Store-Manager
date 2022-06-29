const connection = require('./connection');

const productsModel = {
  async listProducuts() {
  const query = 'SELECT * FROM StoreManager.products';
  const [items] = await connection.execute(query);
  return items;
},

};
module.exports = productsModel;