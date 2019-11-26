const { bdd } = require('../config/config');

module.exports = require(knex)(bdd);