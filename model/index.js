const sequelize = require('../config/database');
const { DataTypes } = require('sequelize');  

// Create an empty object to hold our models
const db = {};

// Define and export the models using the sequelize instance
db.Content = require('./content')(sequelize, DataTypes);
db.User = require('./user')(sequelize, DataTypes);
db.WatchedContent = require('./watched.content')(sequelize, DataTypes);

// Set up associations between models (if any)


// Add sequelize instance to db object for connection testing
db.sequelize = sequelize;
db.Sequelize = require('sequelize');

// Export db object with models and sequelize instance
module.exports = db;
