'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kelompokTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kelompokTool.belongsTo(models.kelompok)
      kelompokTool.belongsTo(models.practicalTool)
      
    }
  }
  kelompokTool.init({
    additionalToolId: DataTypes.INTEGER,
    kelompokId: DataTypes.INTEGER,
    practicalToolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'kelompokTool',
  });
  return kelompokTool;
};