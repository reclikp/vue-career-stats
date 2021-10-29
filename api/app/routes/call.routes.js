module.exports = app => {
    const call = require('../controllers/call.controller.js');

    var router = require('express').Router();

    router.post('/', call.create);

    router.get('/', call.findAll);

    router.get('/totalTime', call.getTotalCallTime);

    app.use('/api/call', router);
};