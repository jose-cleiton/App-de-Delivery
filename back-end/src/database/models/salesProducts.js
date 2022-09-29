const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');
const { ProductModel } = require('./products');
const { SaleModel } = require('./sales');

class SaleProductModel extends Model {}

SaleProductModel.init(
  {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: SaleModel,
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      references: {
        model: ProductModel,
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
    modelName: 'sales_products',
    tableName: 'sales_products',
    sequelize,
  },
);

module.exports = {
  SaleProductModel,
};
