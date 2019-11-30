express = require('express');

const { typeDefs, resolvers } = require('./db/graphql/middlewares');
const { ApolloServer } = require('apollo-server-express');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });


///////////////view engine setup///////////////
module.exports = app;