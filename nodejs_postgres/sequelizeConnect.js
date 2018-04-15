const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  database: 'postgres',
  username: 'postgres',
  password: 'aaaa1'
});

module.exports = {
  sequelize,
  Sequelize
}
