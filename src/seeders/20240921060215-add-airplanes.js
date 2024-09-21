'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('Airplanes',[{
        modeNo:'Boeing 747',
        capacity:400,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modeNo:'Boeing 777',
        capacity:600,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modeNo:'Airbus A330',
        capacity:700,
        createdAt:new Date(),
        updatedAt:new Date()
      },
      {
        modeNo:'Airbus A320',
        capacity:210,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
