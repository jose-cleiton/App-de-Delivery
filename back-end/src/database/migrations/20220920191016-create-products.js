module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('products', {
     id: {
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
       type: Sequelize.INTEGER
     },
     name: {
       allowNull: false,
       type: Sequelize.STRING,
     },
     price: {
       allowNull: false,
       type: Sequelize.DECIMAL,
     },
     url_image: {
       allowNull: false,
       type: Sequelize.STRING,
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('products')
  }
};
