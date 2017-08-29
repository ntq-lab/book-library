const express = require('express');
const path = require('path');

const app = module.exports = express();

app.set('views', path.resolve(__dirname, '../', 'views'));
app.set('view engine', 'ejs');
