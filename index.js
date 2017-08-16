const express = require('express');

const app = module.exports = express();

const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];

app.set('views', './views');
app.set('view engine', 'pug');

app.use(require('./controllers'));

// start server
var server = app.listen(config.server.port, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);
});
