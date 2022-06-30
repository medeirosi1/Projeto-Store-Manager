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

    describe('getProduct', () => {
      it('Verifica se está pegando o id especifíco', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();

        req.params = { id: 1 }
        sinon.stub(productsService, 'getProduct').resolves(true);
        await productsController.getProduct(req, res);
        expect(res.status.calledWith(200)).to.be.equal(true);
      });

      it('Verifica se é exibido a mensagem de erro quando é passado um id invalido', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.params = { id: 999 }
        sinon.stub(productsService, 'getProduct').resolves(true);
        await productsController.getProduct(req, res);
        expect(res.status.calledWith(404)).to.be.equal(true);
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
      })
    })
  })
});