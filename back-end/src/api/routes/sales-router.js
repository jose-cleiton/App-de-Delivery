const { Router } = require('express');
const { SalesController } = require('../modules/sales/sales-controller');
const { SalesServices } = require('../modules/sales/sales-service');
const { TokenAuthMiddleware } = require('../middlewares/token-auth.middleware');

class SalesRoute {
  constructor() {
    this.path = '/orders';
    /**
     *  @type {import('../modules/sales/sales-controller').SalesController}
     */
    this.salesController = new SalesController(new SalesServices());
    this.router = Router();
    this.tokenMdwr = new TokenAuthMiddleware()
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`,
    this.tokenMdwr.verify,
    this.salesController.createSale);
  }
}

module.exports = { SalesRoute };