const app = require('./src/app');

const server = app.listen(require('./src/infrastructures/env').server.port, function() {
	const host = server.address().address;
	const port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);
});
