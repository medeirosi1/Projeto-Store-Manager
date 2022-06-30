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
  });
    
    
})