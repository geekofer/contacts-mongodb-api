'use strict'

let express = require('express');
let ContactController = require('../controllers/contact');

let api = express.Router();

api.get('/contacts',       ContactController.index);
api.get('/contact/:id',    ContactController.show);
api.post('/contact',       ContactController.store);
api.put('/contact/:id',    ContactController.update);
api.delete('/contact/:id', ContactController.destroy);

module.exports = api;