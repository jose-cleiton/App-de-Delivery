const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');
const { UserModel } = require('./UserModel');
const { ProductModel } = require('./ProductModel');
const { SaleProductModel } = require('./SaleProductModel');

class SaleModel extends Model {}

SaleModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
    sellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: 'id',
      },
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    deliveryAddress: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    deliveryNumber: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    saleDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true,
    modelName: 'sales',
    sequelize,
  },
);

SaleModel.belongsTo(UserModel, { foreignKey: 'userId', as: 'buyers' });
UserModel.hasMany(SaleModel, { foreignKey: 'userId', as: 'purchases' });

SaleModel.belongsTo(UserModel, { foreignKey: 'sellerId', as: 'sellers' });
UserModel.hasMany(SaleModel, { foreignKey: 'sellerId', as: 'sales' });

ProductModel.belongsToMany(SaleModel, {
  through: SaleProductModel,
  foreignKey: 'productId',
  as: 'productsSales',
});
SaleModel.belongsToMany(ProductModel, {
  through: SaleProductModel,
  foreignKey: 'saleId',
  as: 'salesProducts',
});

module.exports = {
  SaleModel,
};
