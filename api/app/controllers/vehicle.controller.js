const db = require('../models');
const Vehicle = db.vehicle;
const Unit = db.unit;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    const vehicle = {
        number: req.body.number,
        designation: req.body.designation,
        parameters: req.body.parameters,
        brand: req.body.brand,
        model: req.body.model,
        body: req.body.body,
        unitId: req.body.unitId
    };

    Vehicle.create(vehicle)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating the Vehicle.'
            });
        })
};

exports.findAll = (req, res) => {
    Vehicle.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while retrieving Vehicles.'
            });
        });
};