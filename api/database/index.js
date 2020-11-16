const Sequelize = require('sequelize');

const connection = new Sequelize('receitas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;