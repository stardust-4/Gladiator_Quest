'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Fighter extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fighter.init(
    {
      schoolid: DataTypes.INTEGER,
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      buycost: DataTypes.INTEGER,
      upgradecost: DataTypes.INTEGER,
      wins: DataTypes.INTEGER,
      losses: DataTypes.INTEGER,
      powermove: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      type: DataTypes.STRING,
      healthpoints: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Fighter',
      tableName: 'fighters'
    }
  )
  return Fighter
}
