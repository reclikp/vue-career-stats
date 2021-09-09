module.exports = (sequelize, Sequelize) => {
    const Incident = sequelize.define('incident', {
        city: {
            type: Sequelize.STRING,
            comment: 'city where the incident took place'
        }, 
        location: {
            type: Sequelize.STRING,
            comment: 'the exact location of the incident'
        },
        description: {
            type: Sequelize.TEXT,
            comment: 'description of the activities at the scene'
        }
    }, {
        timestamps: false
    });

    return Incident;
};