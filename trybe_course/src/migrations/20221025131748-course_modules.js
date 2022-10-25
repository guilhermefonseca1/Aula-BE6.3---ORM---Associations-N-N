'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('course_modules', {
      course_id: {
        allowNull: false,
        //allowNull: false, significa que ela não irá aceitar valores nulos
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'courses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        //OS DADOS DE reference DEFINEM QUE A COLUNA course_id SERÁ UMA CHAVE ESTRANGEIRA
      },
      module_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'modules',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('course_modules');
  }
};
