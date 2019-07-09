'use strict'

let express = require('express');
let bodyParser = require('body-parser');
let app = express();

let ContactRoutes = require('./routes/contact');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api', ContactRoutes);

module.exports = app;
