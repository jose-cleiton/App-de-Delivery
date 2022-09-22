const { SaleModel } = require('../../../database/models/sales')
const { SaleProductModel} = require('../../../database/models/salesProducts');

class SalesServices {
    constructor() {
        /**
     * @type {import('sequelize/types/model').ModelCtor<import('sequelize/types/model').Model>}
     */
        this.sale = SaleModel;
        this.saleProduct = SaleProductModel;
        
    }
    async createSale(payload, productList) {
        const newSale = await this.sale.create({
            ...payload,
            status: 'Pendente'
        })
        const products = await productList.forEach( (product) => {
            this.saleProduct.create({
                saleId: newSale.id,
                productId: product.id,
                quantity: product.quantity
            })
        })

        return payload.totalPrice;
    }
}

module.exports = { SalesServices };
