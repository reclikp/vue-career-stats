const db = require('../models');
const Call = db.call;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate
    if(!req.body.departure || !req.body.return) {
        res.status(400).send({
            message: 'Departure and return datetime can not be empty!'
        });

        return;
    }

    // Create a Call
    const call = {
        departure: req.body.departure,
        return: req.body.return,
        description: req.body.description
    };

    Call.create(call)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating the Call.'
            });
        })
};

exports.findAll = (req, res) => {
    Call.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while retrieving Calls.'
            });
        });
};