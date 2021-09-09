const db = require('../models');
const IncidentType = db.incidentType;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate
    if(!req.body.name) {
        res.status(400).send({
            message: 'Name can not be empty!'
        });

        return;
    }

    // Create an IncidentType
    const incidentType = {
        parentId: req.body.parentId,
        name: req.body.name
    };

    IncidentType.create(incidentType)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating the IncidentType.'
            });
        })
};

exports.findAll = (req, res) => {
    IncidentType.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while retrieving IncidentTypes.'
            });
        });
};