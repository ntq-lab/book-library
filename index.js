const express = require('express');

const app = module.exports = express();

const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];

// start server
var server = app.listen(config.server.port, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);
});
