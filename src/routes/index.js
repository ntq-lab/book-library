module.exports = app => {
	require('./api/user')(app);
	require('./site/index')(app);
};
