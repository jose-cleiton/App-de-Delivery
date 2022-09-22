const { ProductModel } = require('../../../database/models/products');

class ProductsService {
  constructor() {
    /**
     * @type {import('sequelize/types/model').ModelCtor<import('sequelize/types/model').Model>}
     */
    this.productsRepository = ProductModel;
  }

  async findAllProducts() {
    const products = await this.productsRepository.findAll();
    return products;
  }
}

module.exports = { ProductsService };
