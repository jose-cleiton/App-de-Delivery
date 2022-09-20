const User = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING,
    }, {
        tableName: 'users',
        timestamps: false,
    })

    User.associate = (models) => {
        User.hasMany(models.Sales,
            { foreignKey: 'user_id', as: 'client'})
        User.hasMany(models.Sales,
            { foreignKey: 'seller_id', as: 'seller'})
        }

    return User;
}

module.exports  = User;