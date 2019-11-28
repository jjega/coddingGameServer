express = require('express');

const { typeDefs, resolvers } = require('./db/graphql/middlewares');
const { ApolloServer } = require('apollo-server-express');

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);


///////////////view engine setup///////////////
module.exports = app;