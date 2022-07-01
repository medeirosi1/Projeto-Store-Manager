const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService')
const sinon = require('sinon');
const { expect } = require('chai');

const obj = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
]

describe('Products Service', () => {
  describe('listProducts', () => {
    beforeEach(() => {
      sinon.restore();
    })

    it('Verifica se e retorna um objeto com um item', async () => {
      sinon.stub(productsModel, 'listProducuts').resolves(obj)

      const list = await productsService.listProducuts();
      expect(list).to.be.deep.equal(obj);
    });
      
    describe('getProduct', () => {
      it('Verifica se está pegando o id especifíco', async () => {
        sinon.stub(productsModel, 'getProduct').resolves(obj);
        const [getProductId] = await productsService.getProduct(1);
        const [[id]] = [obj]
        expect(getProductId).to.be.equal(id);
      })
    })

    describe('validateNameBody', () => {
      it('Verifica se mandar um objeto ele retorna váido', () => {
        const object = productsService.validateNameBody({ name: 'Name Teste' });
        expect(object).to.be.deep.equal({ name: 'Name Teste' })
      });
      it('Verifica se é enviando null na hora de enviar um name vazio', () => {
        const objectVazio = productsService.validateNameBody({ name: '' });
      })
    })

    describe('createProduct', () => {
      it('Verifica se retorna o id certo', async () => {
        const expectedId = { name: 'Name teste' }
        sinon.stub(productsModel, 'createProduct').resolves(expectedId)
        const id = await productsService.createProduct(expectedId)
        expect(id).to.be.deep.equal(expectedId);
      })
    })

    describe('editProduct', () => {
      it('Verifica se retorna true ao mandar um objeto válido', async () => {
        sinon.stub(productsModel, 'editProduct').resolves(true);
        const change = await productsService.editProduct(1, { name: 'Name Teste' });
        expect(change).to.be.eq(true);
      })
    })
  });
    
    
})