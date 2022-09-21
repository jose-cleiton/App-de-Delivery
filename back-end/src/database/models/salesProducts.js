const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');
const { ProductModel } = require('./ProductModel');
const { SaleModel } = require('./SaleModel');

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
    tableName: 'salesProducts',
    sequelize,
  },
);

module.exports = {
  SaleProductModel,
};
