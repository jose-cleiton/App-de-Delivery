const { SaleModel } = require('../../../database/models/sales')
const { SaleProductModel} = require('../../../database/models/salesProducts');
const { HttpException } = require('../../errors/http-exception.error');
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

    async updateStatus(id, status) {
        const[newStatus] = await this.sale.update(
            { status },
            { where: { id: Number(id) } }
        )
        
        if(newStatus === 0) throw new HttpException(400, 'Bad Request')
        
        return newStatus;
    }
}

module.exports = { SalesServices };
