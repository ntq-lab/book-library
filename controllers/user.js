const mongo = require('../infrastructures/mongo')();
const UserModel = require('../models/user')(mongo);

module.exports = app => {
	app.get('/user', function(req, res, next) {
		const demoUser = new UserModel({
			email: 'xxx@gmail.com',
			password: '12345'
		});

		demoUser.save().then(function(user) {
			console.log(user);

			res.status(200).end();
		}).catch(function(err) {
			console.error(err);

			res.status(400).end();
		});
	});
};
