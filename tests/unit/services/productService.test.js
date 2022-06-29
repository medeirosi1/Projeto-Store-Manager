const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Products Service', () => {
  describe('listProducts', () => {
    beforeEach(() => {
      sinon.restore();
    })

    it('Verifica se e retorna um objeto com um item', async () => {
      const obj = [
        {
          "id": 1,
          "name": "Martelo de Thor"
        },
      ]

      sinon.stub(productsModel, 'listProducuts').resolves(obj)

      const list = await productsService.listProducuts();
      expect(list).to.be.deep.equal(obj);
    });
  })
})