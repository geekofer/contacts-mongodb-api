'use strict'

let mongoose = require('mongoose');
let mongoDB = 'mongodb://localhost/contacts-mongodb-api';
let app = require('./app');
let port = 9200;

mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`contacts-mongo-db-api run on http://localhost:${port}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })