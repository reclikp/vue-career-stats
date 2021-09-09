module.exports = app => {
    const incidentType = require('../controllers/incidentType.controller.js');

    var router = require('express').Router();

    router.post('/', incidentType.create);

    router.get('/', incidentType.findAll);

    app.use('/api/incidentType', router);
};