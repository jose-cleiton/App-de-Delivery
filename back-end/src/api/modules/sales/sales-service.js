const { SaleModel } = require('../../../database/models/sales');
const { SaleProductModel } = require('../../../database/models/salesProducts');
const { HttpException } = require('../../errors/http-exception.error');
const { ProductModel } = require('../../../database/models/products');

function prepareObjctToCreateSale(payload, productList, products) {
    const totprice = productList
        .reduce((acc, curr) => acc + products
            .find((item) => item.id === curr.id)
            .price * curr.quantity, 0);
      return {
            userId: payload.userId,
            sellerId: payload.sellerId,
            deliveryAddress: payload.deliveryAddress,
            deliveryNumber: payload.deliveryNumber,
            status: 'Pendente',
            totalPrice: totprice.toFixed(2),

        };
     }
class SalesServices {
    constructor() {
        /**
     * @type {import('sequelize/types/model').ModelCtor<import('sequelize/types/model').Model>}
     */
        this.sale = SaleModel;
        this.saleProduct = SaleProductModel;
    }

    async createSale(payload, productList) {
        const products = await ProductModel.findAll();
        const sale = prepareObjctToCreateSale(payload, productList, products);
        const newSale = await this.sale.create(sale);
      
        await productList.forEach((product) => {
            this.saleProduct.create({
                saleId: newSale.id,
                productId: product.id,
                quantity: product.quantity,
            });
        });

        return { id: newSale.id, ...sale, productList };
    }

    async updateStatus(id, status) {
        const [newStatus] = await this.sale.update(
            { status },
            { where: { id: Number(id) } },
        );
        
        if (newStatus === 0) throw new HttpException(400, 'Bad Request');
        
        return newStatus;
    }

    async getAllSalesUser(userId) {
        const sales = await this.sale.findAll({

            where: { userId: userId.id },
           include: [{ model: ProductModel, as: 'salesProducts' }],

        });

        return sales;
    }
    }

module.exports = { SalesServices };
