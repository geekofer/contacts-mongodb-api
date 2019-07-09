'use strict'

var Contact = require('../models/contact');

/**
 * Display a listing of the contacts.
 *
 * @return Array
 */

function index(req, res) {
    Contact.find({}).exec((err, contacts) => {
        if(err) {
            res.status(500).send({
                message: 'Error on server'
            })
        } else {
           if(contacts) {
                res.status(200).send({
                    contacts
                });
           } else {
                res.status(200).send({
                    message: 'No contacts'
                });
           }
        }
    });
}

/**
 * Store a newly created contacts in database.
 *
 * @param String name, 
 * @param String surname, 
 * @param String email
 * @param String phone
 * @return Object
 */

function store(req, res) {
    let contact = new Contact();

    let params = req.body;

    if(params.name) {
        contact.name    = params.name;
        contact.surname = params.surname;
        contact.email   = params.email;
        contact.phone   = params.phone;

        contact.save((err, contact) => {
            if(err) {
                res.status(500).send({
                    message: 'Error on server'
                })
            } else {
                if(contact) {
                    res.status(200).send({
                        contact
                    });
                }
            }
        })
    } else {
        res.status(400).send({
            message: 'The name is required'
        });
    }
}


/**
 * Display the specified contact.
 *
 * @param  String id
 * @return Object
 */

function show(req, res) {
    let contactId = req.params.id;

    Contact.findById(contactId).exec((err, contact) => {
        if(err) {
            res.status(500).send({
                message: 'Error on server'
            });
        } else {
            if(contact) {
                res.status(200).send({
                    contact
                })
            } else {
                res.status(201).send({
                    message: 'The contact is not found'
                })
            }
        }
    });
}

/**
 * Update the specified contact.
 *
 * @param String name, 
 * @param String surname, 
 * @param String email
 * @param String phone
 * @return Object
 */

function update(req, res) {
    let contactId = req.params.id;
    let request = req.body;

    Contact.findByIdAndUpdate(contactId, request, {new: true}, (err, contact) => {
        if(err) {
            res.status(500).send({
                message: 'Error on server'
            });
        } else {
            if(contact) {
                res.status(200).send({
                    contact
                })
            } else {
                res.status(201).send({
                    message: 'The contact is not found'
                })
            }
        }
    });
}

/**
 * Delete the specified contact.
 *
 * @param  String id
 * @return Object
 */

function destroy(req, res) {
    let contactId = req.params.id;

    Contact.findByIdAndDelete(contactId).exec((err, contact) => {
        if(err) {
            res.status(500).send({
                message: 'Error on server'
            });
        } else {
            if(contact) {
                res.status(200).send({
                    contact
                })
            } else {
                res.status(201).send({
                    message: 'The contact is not found'
                })
            }
        }
    });
}

module.exports = {
    index,
    store,
    show,
    update,
    destroy
}