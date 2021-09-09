module.exports = (sequelize, Sequelize) => {
    const IncidentType = sequelize.define('incident_type', {
        parentId: {
            type:Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING
        }
    }, {
        timestamps: false
    });

    return IncidentType;
};