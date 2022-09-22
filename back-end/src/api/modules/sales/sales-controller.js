// const SalesService  = require('./sales-service');
const { StatusCode } = require('../../helpers/status-code.helper')

class SalesController {
    constructor(service) {
        /**
         * @type {import('./sales-service').SalesServices}
         */
        this.salesService = service
        this.createSale = this.createSale.bind(this);
    }

    createSale = async (req, res) => {
        const { payload, productList } = req.body;
        const result = await this.salesService.createSale(payload, productList);
        return res.status(StatusCode.CREATED).json(result);
    }

}

module.exports = { SalesController };

