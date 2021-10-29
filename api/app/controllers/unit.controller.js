const db = require('../models');
const Unit = db.unit;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate
    if(!req.body.name || !req.body.city) {
        res.status(400).send({
            message: 'Name and city can not be empty!'
        });

        return;
    }

    // Create a Unit
    const unit = {
        name: req.body.name,
        city: req.body.city
    };

    // Push into database
    Unit.create(unit)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while creating the Unit.'
            });
        })
};

exports.findAll = (req, res) => {
    const condition = req.query.name ? { name: { [Op.like]: `%${req.query.name}%` } } : null;

    Unit.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while retrieving units.'
            });
        });
};

exports.findByID = (req, res) => {
    const condition = req.query.id ? { id: { [Op.like]: `%${req.query.id}%` } } : null;

    Unit.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occured while retrieving units.'
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Unit.update(req.body, { 
        where: { id: id } 
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: 'Unit was updated successfully.'
                });
            } 
            else {
                res.send({
                    message: `Cannot update Unit with id=${id}. Unit may not have been found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Error updating Unit with id=${id}.`
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Unit.destroy({
        where: { id: id }
    })
        .then(num => {
            if(num == 1) {
                res.send({
                    message: 'Unit was deleted successfully!'
                });
            } else {
                res.send({
                    message: `Cannot delete Unit with id=${id}. Unit may not have been found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Unit with id=${id}.`
            });
        });
};