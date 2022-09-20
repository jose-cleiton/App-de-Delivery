const Products = (sequelize, DataTypes) => {
    const Products = sequelize.define('products', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL(4,2),
        url_image: DataTypes.STRING,
    }, {
        tableName: 'products',
        timestamps: false,
    })

    Products.associate = (models) => {
        Products.hasMany(models.salesProducts,
            { foreignKey: 'product_id', as: 'products'})
    }

    return Products;
}

module.exports  = Products;