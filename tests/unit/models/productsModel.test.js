const productsModel = require('../../../models/productsModel');
const connection = require('../../../models/connection');
const sinon = require('sinon');
const { expect } = require('chai');

const obj = [
  {
    id: 1,
    name: "Martelo de Thor"
  },
]

describe('Products Model', () => {
  describe('listProducts', () => {
    beforeEach(() => {
      sinon.restore();
    })

    it('Verifica se e retorna um objeto', async () => {

      sinon.stub(connection, 'execute').resolves(obj)

      const list = await productsModel.listProducuts();
      expect(list).to.be.a('object');
    });

    describe('existsId', () => {
      it('Verifica se ao mandar um id o "exist" retorna "true"', async () => {
        sinon.stub(connection, 'execute').resolves([obj]);
        const existsid = await productsModel.existsId(1);
        expect(existsid).to.be.equal(true);
      })
    });

    describe('getProduct', () => {
      it('Verifica se está pegando o id especifíco', async () => {
        sinon.stub(connection, 'execute').resolves([obj]);
        const getProductId = await productsModel.getProduct(1);
        const [[id]] = [obj]
        expect(getProductId).to.be.equal(id);
      })
    })
  })
})