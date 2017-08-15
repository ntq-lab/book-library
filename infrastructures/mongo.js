const config = require('./env');
const mongoose = require('mongoose');
const bluebird = require('bluebird');

module.exports = () => {
	// default is mPromise
	mongoose.Promise = bluebird;

	mongoose.connect(config.db.address, {
		useMongoClient: true
	});

	return mongoose;
};
