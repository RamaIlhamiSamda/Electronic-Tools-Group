'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class additionalTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      additionalTool.belongsToMany(models.practicalTool, { through: models.kelompokTool })
    }
  }
  additionalTool.init({
    name: DataTypes.STRING,
    ukuran: DataTypes.STRING,
    jumlah: DataTypes.INTEGER,
    harga: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'additionalTool',
  });
  return additionalTool;
};