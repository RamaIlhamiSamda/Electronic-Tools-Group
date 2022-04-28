'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class practicalTool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      practicalTool.belongsToMany(models.kelompok, { through: models.kelompokTool })

    }
  }
  practicalTool.init({
    name: DataTypes.STRING,
    ukuran: DataTypes.STRING,
    jumlah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'practicalTool',
  });
  return practicalTool;
};