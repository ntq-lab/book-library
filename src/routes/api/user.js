const userController = require('../../controllers/user')();

module.exports = app => {
	app.get('/user', userController.create);
};
