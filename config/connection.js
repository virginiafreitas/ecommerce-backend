// Load and configure environment variables from .env file
require('dotenv').config();

// Import the Sequelize library for database interaction
const Sequelize = require('sequelize');

// Sequelize instance checking whether the JAWSDB_URL environment variable is defined 
const sequelize = process.env.JAWSDB_URL
// If it is defined, uses it to create a Sequalize instance and the connection to the database is established using the provided URL
  ? new Sequelize(process.env.JAWSDB_URL)
// If not defined, uses the values of DB_NAME, DB_USER, and DB_PASSWORD environment variables to create a Sequelize instance using the local MySQL database. 
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export the created Sequelize instance for database interaction
module.exports = sequelize;

