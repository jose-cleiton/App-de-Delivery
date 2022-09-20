module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('sales', {
     id: {
       allowNull: false,
       primaryKey: true,
       autoIncrement: true,
       type: Sequelize.INTEGER
     },
     user_id: {
       allowNull: false,
       type: Sequelize.INTEGER,
       references: {
          model: 'users',
          key: 'id'
       }
     },
     seller_id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
         model: 'users',
         key: 'id'
      }
    },
    total_price: {
      allowNull: false,
      type: Sequelize.DECIMAL,
    },
    delivery_address: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    delivery_number: {
      allowNull: false,
      type: Sequelize.STRING
    },
    sale_date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    status: {
      allowNull: false,
      type: Sequelize.STRING,
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales')
  }
};
