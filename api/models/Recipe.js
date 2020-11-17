const Sequelize = require("sequelize");
const connection = require("../database");

const Recipe = connection.define("recipe", {
  img: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  titulo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  tempo: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Recipe.sync({
  force: false,
}).then(() => {
  console.log("table successfully created");
});

module.exports = Recipe;
