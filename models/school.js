'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class School extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      School.belongsTo(models.User, { foreignKey: 'userid' })
    }
  }
  School.init(
    {
      userid: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      wealth: DataTypes.INTEGER,
      wins: DataTypes.INTEGER,
      losses: DataTypes.INTEGER,
      description: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'School',
      tableName: 'schools'
    }
  )
  return School
}
