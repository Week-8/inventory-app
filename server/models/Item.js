const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db");

class Item extends Model {} 

Item.init(
  {
   name: DataTypes.STRING,
   description: DataTypes.STRING,
   price: DataTypes.FLOAT,
   category: DataTypes.STRING,
   image: DataTypes.STRING,
  },
  {
    sequelize,
  }
);

console.log(Item)

module.exports = Item;
