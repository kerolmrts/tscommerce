'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    user_email: DataTypes.STRING,
    user_username: DataTypes.STRING,
    user_password: DataTypes.STRING,
    user_name: DataTypes.STRING,
    user_phone: DataTypes.STRING,
    user_city: DataTypes.STRING,
    user_street: DataTypes.STRING,
    user_number: DataTypes.INTEGER,
    user_cep: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};