const path = require("path");
const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

// Import models
const Item = require("./Item");
const User = require("./User");
const ShoppingCart = require("./Cart");

// Initialize relationships
User.hasMany(ShoppingCart, { foreignKey: "userId" }); // A user can have many cart items
ShoppingCart.belongsTo(User, { foreignKey: "userId" }); // Each cart item belongs to a user

Item.hasMany(ShoppingCart, { foreignKey: "itemId" }); // An item can be in many carts
ShoppingCart.belongsTo(Item, { foreignKey: "itemId" }); // Each cart item refers to an item

// Export models and database
module.exports = {
  db, // Sequelize instance
  Item,
  User,
  ShoppingCart,
};
