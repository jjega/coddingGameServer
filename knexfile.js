// Update with your config settings.
const path = require('path');

module.exports = {

  development: {
    client: "pg",
    version: "7.14",
    connection: {
      host: "127.0.0.1",
      user: "jega",
      password: "",
      database: "coding_game"
    },
    migrations: {
      directory: path.join(__dirname, 'db/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db/seeds')
    },
    log: {
      warn(message) {
        console.log(`WARNING: ${message}`);
      },
      error(message) {
        console.log(`ERROR: ${message}`);
      },
      deprecate(message) {
        console.log(`DEPRECATED: ${message}`);
      },
      debug(message) {
        console.log(`DEBUG: ${message}`);
      },
    },
    acquireConnectionTimeout: 10000
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
