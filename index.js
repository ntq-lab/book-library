const config = require('./infrastructures/env');
const app = require('./infrastructures/express')();

require('./controllers/user')(app);

const server = app.listen(config.server.port, function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);
});
