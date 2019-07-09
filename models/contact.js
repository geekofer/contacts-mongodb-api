'use strict'

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let ContactSchema = Schema({
    name: String,
    surname: String,
    email: String,
    phone: String
});

module.exports = mongoose.model('Contact', ContactSchema);