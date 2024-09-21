'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flight', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNo: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      deptAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      arrAirportId: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      arrTime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      deptTime: {
        type: Sequelize.DATE,
        allowNull:false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull:false,
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Flight');
  }
};