const Item = require("./Item");
const User = require("./User");
const path = require("path");
const { Sequelize } = require("sequelize");
const db = new Sequelize({
  dialect: "sqlite",
  storage: path.join(__dirname, "db.sqlite"),
});

module.exports = {
  Item,
  User,
};
