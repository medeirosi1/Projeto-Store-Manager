const productsController = require('../../../controllers/productsController');
const productsService = require('../../../services/productsService')
const sinon = require('sinon');
const { expect } = require('chai');

describe('Products Controller', () => {
  describe('listProducts', () => {
    beforeEach(() => {
      sinon.restore();
    })

    it('Verifica se e retorna um objeto com um item', async () => {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(productsService, 'listProducuts').resolves(true)

      await productsController.listProducts(req, res)

      expect(res.status.calledWith(200)).to.be.equal(true);
    });
  })
});