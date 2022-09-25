const { Router } = require('express');
const {
  ProductsController,
} = require('../modules/products/products-controller');
const { ProductsService } = require('../modules/products/products-service');

class ProductsRoute {
  constructor() {
    this.path = '/products';
    /**
     * @type {import('../modules/products/products-controller').ProductsController}
     */

    this.productsController = new ProductsController(new ProductsService());
    this.router = Router();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.get(`${this.path}`, this.productsController.findAllProducts);
  }
}

module.exports = { ProductsRoute };
