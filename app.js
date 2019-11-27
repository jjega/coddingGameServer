express = require('express');

const schema = require('./db/graphql/middlewares');
const { ApolloServer } = require('apollo-server-express');
const query = require('qs-middleware');

// console.log(schema);
// const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
// server.applyMiddleware({ app });

// app.listen({ port: 3000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:3000${server.graphqlPath}`)
// );


///////////////view engine setup///////////////
module.exports = app;