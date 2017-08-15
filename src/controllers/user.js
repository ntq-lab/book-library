const mongo = require('../infrastructures/mongo')();
const UserModel = require('../models/user')(mongo);

module.exports = () => {
	const self = {};

	self.create = (req, res, next) => {
		return demoUser.save().then(user => {
			console.log(user);

			res.status(200).end();
		}).catch(err => {
			console.error(err);

			res.status(400).end();
		});
	};

	return self;
};
