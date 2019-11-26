express = require('express');
config = require('./config/config');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');   

// Some fake data
const books = [
  {
    title: "Harry Potter and the Sorcerer's stone",
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { books: [Book] }
  type Book { title: String, author: String }
`;

// The resolvers
const resolvers = {
  Query: { books: () => books },
};

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// catch 404 and forward to error handler
app.use('/*', function(req, res, next){
	return res.status(404).json({ status: false, error: "Not Found", });
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: err
	});
});
app.set('views', path.join(__dirname, 'views'));
db.connect(db.MODE_PRODUCTION, function(err) {
	if (err) {
		console.log('Unable to connect to MySQL.');
		process.exit(1);
	} else {
		console.log('Connection Object:'+db);
		console.log('Connection Status:'+db.get_status());

	}
});

///////////////view engine setup///////////////
module.exports = app;