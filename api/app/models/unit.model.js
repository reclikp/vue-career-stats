module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define('unit', {
        name: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return Unit;
};