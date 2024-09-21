'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Flight.init({
    flightNo: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    airplaneId:{ 
      type:DataTypes.INTEGER,
      allowNull:false
    },
    deptAirportId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrAirportId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    deptTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: DataTypes.STRING,
    totalSeats:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};