module.exports = (sequelize, Sequelize) => {
    const Call = sequelize.define('call', {
        departure: {
            type: Sequelize.DATE,
            comment: 'departure date and time'
        }, 
        return: {
            type: Sequelize.DATE,
            comment: 'return date and time'
        },
        description: {
            type: Sequelize.STRING,
            comment: 'additional info'
        }
    }, {
        timestamps: false
    });

    return Call;
};