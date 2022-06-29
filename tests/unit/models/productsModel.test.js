const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Products Model', () => {
  describe('listProducts', () => {
    beforeEach(() => {
      sinon.restore();
    })

    it('Verifica se e retorna um objeto', async () => {
      const obj = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
      ]

      sinon.stub(connection, 'execute').resolves(obj)

      const list = await productsModel.listProducuts();
      expect(list).to.be.a('object');
    });
  })
})