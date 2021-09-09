const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.unit = require('./unit.model.js')(sequelize, Sequelize);
db.vehicle = require('./vehicle.model.js')(sequelize, Sequelize);
db.call = require('./call.model.js')(sequelize, Sequelize);
db.incidentType = require('./incidentType.model.js')(sequelize, Sequelize);
db.incident = require('./incident.model.js')(sequelize, Sequelize);

db.unit.hasMany(db.vehicle, { as: 'vehicle' });
db.vehicle.belongsTo(db.unit, {
    foreignKey: 'unitId',
    as: 'unit',
});

// Incident relations
db.call.hasMany(db.incident, { as: 'incident' });
db.incident.belongsTo(db.call, {
    foreignKey: 'callId',
    as: 'call'
});

db.vehicle.hasMany(db.incident, { as: 'incident' });
db.incident.belongsTo(db.vehicle, {
    foreignKey: 'vehicleId',
    as: 'vehicle'
});

db.incidentType.hasMany(db.incident, { as: 'incident' });
db.incident.belongsTo(db.incidentType, {
    foreignKey: 'incidentTypeId',
    as: 'incidentType'
});

module.exports = db;