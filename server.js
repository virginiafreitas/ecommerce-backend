// Import the required modules
const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

// Create an Express app instance
const app = express();
// Define the port to listen on, defaulting to 3001
const PORT = process.env.PORT || 3001;

// Set up middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the defined routes for handling incoming requests
app.use(routes);

  // Sync sequelize models to the database
  sequelize.sync({ force: false }).then(() => {
  
  // Once synchronization is done, start the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  })