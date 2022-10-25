'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('course_modules', {
      course_id: {
        allowNull: false,
        //allowNull: false, significa que ela não irá aceitar valores nulos
        primaryKey: true,
        type: Sequelize.INTEGER,
        reference: {
          model: 'courses',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }
      //OS DADOS DE reference DEFINEM QUE A COLUNA course_id SERÁ UMA CHAVE ESTRANGEIRA
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
