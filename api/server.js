const express = require('express');
const cors = require('cors');
const db = require('./app/models');

const app = express();

var corsOptions = {
    origin: 'http://localhost:8081'
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();
/*
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

app.get('/', (req, res) => {
    res.json({ sranko: 'Welcome to app.' });
});
*/

require('./app/routes/unit.routes.js')(app);
require('./app/routes/vehicle.routes.js')(app);
require('./app/routes/call.routes.js')(app);
require('./app/routes/incidentType.routes.js')(app);
require('./app/routes/incident.routes.js')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});