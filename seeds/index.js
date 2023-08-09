// Importing the necessary seed files for categories, products, tags, and product tags
const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

// Importing the Sequelize connection from the configuration file
const sequelize = require('../config/connection');

// Defining the main seed function
const seedAll = async () => {
  // Syncing the database with the defined models, forcing it to drop existing tables
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  // Calling the seed functions for different data categories
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  // Exiting the process once seeding is complete
  process.exit(0);
};

// Calling the main seed function to start the seeding process
seedAll();
