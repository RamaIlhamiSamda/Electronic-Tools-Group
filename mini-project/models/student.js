'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      student.belongsTo(models.kelompok)

    }
  }
  student.init({
    name: DataTypes.STRING,
    nim: DataTypes.INTEGER,
    kelompokId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'student',
  });
  return student;
};