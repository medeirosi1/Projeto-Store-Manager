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

    describe('createProduct', () => {
      it('Verifica se retorna o id ao criar o produto com o atributo name', async () => {
        const expectedId = { insertId: 1 }
        const idExpect = 1
        sinon.stub(connection, 'execute').resolves([expectedId])
        const id = await productsModel.createProduct({ name: 'Name Teste' });
        expect(id).to.be.equal(idExpect);
      })
    })

    describe('editProduct', () => {
      it('Verifica se retorna true ao mandar uma mudança valida', async () => {
        sinon.stub(connection, 'execute').resolves([{affectedRows: 1}]);
        const change = await productsModel.editProduct(1, { name: 'Name Teste' });
        expect(change).to.be.equal(1);
      })
    })
  })
})