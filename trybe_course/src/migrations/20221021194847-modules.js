'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('modules', { 
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        autoIncrement: true,
      },
      name :{
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.STRING,
      },
      duration: {
        type: Sequelize.INTEGER,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('modules');
    // await queryInterface.dropTable('users');
  }
};
