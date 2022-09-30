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
    this.tokenMdwr = new TokenAuthMiddleware();
    this.initializeRoutes();
  }

  initializeRoutes() {
    this.router.post(`${this.path}`,
    this.tokenMdwr.verify,
    this.salesController.createSale);

    this.router.get(`${this.path}/salesBySellerId`,
    this.tokenMdwr.decode, this.salesController.getSaleBySeller);
    this.router.patch(`${this.path}/:id`, this.salesController.updateStatus);
    this.router.get(`${this.path}`, this.tokenMdwr.decode, this.salesController.getAllSalesUser);
    this.router.get(`${this.path}/:id`, this.tokenMdwr.decode, this.salesController.getSaleById);
  }
}

module.exports = { SalesRoute };