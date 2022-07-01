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

    describe('createProduct', () => {
      it('Verifica se devolve o item atualizado com status 201', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.body = { name: 'Name Teste' };
        
        sinon.stub(productsService, 'createProduct').resolves(true);
        await productsController.createProduct(req, res)
        expect(res.status.calledWith(201)).to.be.equal(true);
      });
      it('Verifica se retorna uma mensagem de erro e o status se for menor que 5', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.body = { name: 'Nam' };

        sinon.stub(productsService, 'createProduct').resolves(true);
        await productsController.createProduct(req, res)
        expect(res.status.calledWith(422)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" length must be at least 5 characters long' })).to.be.eq(true)
      });
      it('Verifica se retorna um erro e seu status se o campo estiver vazio', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.body = { name: '' };
        sinon.stub(productsService, 'createProduct').resolves(true);
        await productsController.createProduct(req, res)
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" is required' })).to.be.equal(true);
      })
    })

    describe('editProduct', () => {
       it('Verifica se devolve o item atualizado com status 200', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.body = { name: 'Name Teste' };
        req.params = { id: 1 }
        
        sinon.stub(productsService, 'editProduct').resolves(true);
        await productsController.editProduct(req, res)
        expect(res.status.calledWith(200)).to.be.equal(true);
       });
      it('Verifica se retorna uma mensagem de erro e o status se for menor que 5', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.body = { name: 'Nam' };
        req.params = { id: 1 }
        sinon.stub(productsService, 'editProduct').resolves(true);
        await productsController.editProduct(req, res)
        expect(res.status.calledWith(422)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" length must be at least 5 characters long' })).to.be.eq(true)
      })
      it('Verifica se é exibido a mensagem de erro quando é passado um id invalido', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.body = { name: 'Name Teste' };
        req.params = { id: 999 }
        sinon.stub(productsService, 'editProduct').resolves(true);
        await productsController.editProduct(req, res);
        expect(res.status.calledWith(404)).to.be.equal(true);
        expect(res.json.calledWith({ message: 'Product not found' })).to.be.equal(true);
      })
      it('Verifica se retorna um erro e seu status se o campo estiver vazio', async () => {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub();
        req.body = { name: '' };
        req.params = { id: 1 }
        sinon.stub(productsService, 'editProduct').resolves(true);
        await productsController.editProduct(req, res)
        expect(res.status.calledWith(400)).to.be.equal(true);
        expect(res.json.calledWith({ message: '"name" is required' })).to.be.equal(true);
      })
    })
  })
});