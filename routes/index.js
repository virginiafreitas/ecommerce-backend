// Importing the required module 'express' to create a router.
const router = require('express').Router();

// Importing the 'apiRoutes' module from the './api' file.
const apiRoutes = require('./api');

// Attaching the imported 'apiRoutes' to the '/api' route.
router.use('/api', apiRoutes);

// Handling a catch-all route for any unmatched routes.
router.use((req, res) => {
  // Sending a simple HTML response indicating the wrong route.
  res.send("<h1>Wrong Route!</h1>");
});

// Exporting the configured router to be used in other parts of the application.
module.exports = router;
