const SalesProducts = (Sequelize, DataTypes) => {
    const SalesProducts = Sequelize.define('salesProducts',
    {
        sale_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
        },
        quantity: {
            type: DataTypes.INTEGER
        }
    },
    { timestamps: false,
      tableName: 'salesProducts', 
    })

    SalesProducts.associate = (models) => {
        models.Sales.belongsToMany(models.Products, {
            as: 'products',
            through: SalesProducts,
            foreignKey: 'sale_id',
            otherKey: 'product_id',
        });

        models.Products.belongsToMany(models.Sales, {
            as: 'sale',
            through: SalesProducts,
            foreignKey: 'product_id',
            otherKey: 'sale_id',
        })
    };

    return SalesProducts
};

module.exports = SalesProducts;