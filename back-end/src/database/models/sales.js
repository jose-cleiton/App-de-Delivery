const Sales = (sequelize, DataTypes) => {
    const Sales = sequelize.define('sales', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        seller_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        total_price: {
            type: DataTypes.DECIMAL(9,2),
        },
        delivery_address: {
            type: DataTypes.STRING,
        },
        delivery_number: {
            type: DataTypes.STRING,
        },
        sale_date: {
            type: DataTypes.DATE,
        },
        status: {
            type: DataTypes.STRING,
        }
    }, {
        tableName: 'sales',
        timestamps: false,
    })

    Sales.associate = (models) => {
        Sales.belongsToMany(models.Users,
            { foreignKey: 'user_id', as: 'client'})
        Sales.belongsToMany(models.Users,
            { foreignKey: 'seller_id', as: 'seller'})
        Sales.hasMany(models.SalesProducts,
            { foreignKey: 'sale_id', as: 'sale'})
    }

    return Sales;
}

module.exports  = Sales;