const db = require('../models');
const Incident = db.incident;

exports.create = (req, res) => {

    const incident = {
        city: req.body.city,
        location: req.body.location,
        description: req.body.description,
        callId: req.body.callId,
        vehicleId: req.body.vehicleId,
        incidentTypeId: req.body.incidentTypeId
    };

    Incident.create(incident)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating the Incident.'
            });
        })
};

exports.findAll = (req, res) => {
    Incident.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while retrieving Incidents.'
            });
        });
};