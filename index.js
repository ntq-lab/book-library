const express = require('express');

const app = module.exports = express();

const env = process.env.NODE_ENV || 'dev';
const config = require('./config')[env];

// connect mongodb with mongoose
const mongoose = require('mongoose');

// default is mPromise
mongoose.Promise = require('bluebird');
mongoose.connect(config.db.address, {
	useMongoClient: true
});

const UserModel = require('./models/user')(mongoose);
// const demoUser = new UserModel({
// 	email: 'xxx@gmail.com',
// 	password: new Date(),
// 	isDelete: false
// });

// demoUser.save().then(data => {
// 	console.log(data);
// }).catch(err => {
// 	console.log(err);
// });

// start server
var server = app.listen(config.server.port, function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('app listening at http://%s:%s', host, port);
});
