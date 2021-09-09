module.exports = app => {
    const incident = require('../controllers/incident.controller.js');

    var router = require('express').Router();

    router.post('/', incident.create);

    router.get('/', incident.findAll)

    app.use('/api/incident', router);
};