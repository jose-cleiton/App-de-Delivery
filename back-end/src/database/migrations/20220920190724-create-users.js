module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('users', {
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
     email: {
       allowNull: false,
       type: Sequelize.STRING,
       unique: true, // visto no link https://stackoverflow.com/questions/28116187/unique-constraint-on-sequelize-column
     },
     password: {
       allowNull: false,
       type: Sequelize.STRING,
     },
     role: {
       allowNull: false,
       type: Sequelize.STRING,
     }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users')
  }
};
