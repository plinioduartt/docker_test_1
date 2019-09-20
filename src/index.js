const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
const cors = require('cors');

var app = new express();

var PORT = 3000;
var HOST = "0.0.0.0";

app.use(routes);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, HOST);

module.exports = app;