module.exports = {
  bdd: {
    client: "pg",
    version: "7.14",
    connection: {
      host: "127.0.0.1",
      user: "jega",
      password: "",
      database: "coding_game"
    },
    migration: {
      directory: `${__dirname}/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/db/seeds`
    },
    pool: {
      afterCreate: function (conn, done) {
        // in this example we use pg driver's connection API
        conn.query('SET timezone="UTC";', function (err) {
          if (err) {
            // first query failed, return error and don't try to make next query
            done(err, conn);
          } else {
            // do the second query...
            conn.query('SELECT set_limit(0.01);', function (err) {
              // if err is not falsy, connection is discarded from pool
              // if connection aquire was triggered by a query the error is passed to query promise
              done(err, conn);
            });
          }
        });
      }
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
  }
};
