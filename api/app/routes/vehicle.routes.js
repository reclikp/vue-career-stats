module.exports = app => {
    const vehicle = require('../controllers/vehicle.controller.js');

    var router = require('express').Router();

    router.post('/', vehicle.create);

    router.get('/', vehicle.findAll);

    app.use('/api/vehicle', router);
};