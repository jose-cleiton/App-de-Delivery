const { sequelize } = require('.');
const { Model, DataTypes } = require('sequelize');

class UserModel extends Model {}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'customer',
    },
  },
  {
    timestamps: false,
    underscored: true,
    modelName: 'users',
    sequelize,
  },
);

module.exports = {
  UserModel,
};
