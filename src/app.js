const app = require('./infrastructures/express')();

const route = require('./routes')(app);

module.exports = app;
