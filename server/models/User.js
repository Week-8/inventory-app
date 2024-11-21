const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

module.exports = User;
