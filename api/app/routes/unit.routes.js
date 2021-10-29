module.exports = app => {
    const unit = require('../controllers/unit.controller.js');

    var router = require('express').Router();

    router.post('/', unit.create);

    router.get('/', unit.findAll);

    router.get('/:id', unit.findByID);

    router.put('/:id', unit.update);

    router.delete('/:id', unit.delete);

    app.use('/api/unit', router);
};