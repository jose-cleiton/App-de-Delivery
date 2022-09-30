// const SalesService  = require('./sales-service');
const { StatusCode } = require('../../helpers/status-code.helper');

class SalesController {
  constructor(service) {
    /**
     * @type {import('./sales-service').SalesServices}
     */
    this.salesService = service;
    this.createSale = this.createSale.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.getAllSalesUser = this.getAllSalesUser.bind(this);
    this.getSaleById = this.getSaleById.bind(this);
    this.getSaleBySeller = this.getSaleBySeller.bind(this);
  }

  async createSale(req, res) {
    const { payload, productList } = req.body;
    const result = await this.salesService.createSale(payload, productList);
    return res.status(StatusCode.CREATED).json(result);
  }

  async updateStatus(req, res) {
    const { id } = req.params;
    const { status } = req.query;
    const result = await this.salesService.updateStatus(id, status);
    return res.status(StatusCode.ACCEPTED).json(result);
  }

  async getAllSalesUser(req, res) {
    const { userId } = req.body;
    const result = await this.salesService.getAllSalesUser(userId);

    return res.status(StatusCode.OK).json(result);
  }

  async getSaleById(req, res) {
    const { id } = req.params;
    const result = await this.salesService.getSaleById(id);

    return res.status(StatusCode.OK).json(result);
  }

  async getSaleBySeller(req, res) {
    const { userId } = req.body;
    const result = await this.salesService.getSaleBySeller(userId.id);

    return res.status(StatusCode.OK).json(result);
  }
}

module.exports = { SalesController };
