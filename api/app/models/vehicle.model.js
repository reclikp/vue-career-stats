module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define('vehicle', {
        number: {
            type: Sequelize.STRING
        },
        designation: {
            type: Sequelize.STRING
        },
        parameters: {
            type: Sequelize.STRING
        },
        brand: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.STRING,
            comment: 'vehicle body manufacturer'
        }
    }, {
        timestamps: false
    });

    return Vehicle;
};