// Importing the Category model from the '../models' directory.
const { Category } = require('../models');

// An array of category data objects, each containing a 'category_name' property.
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Defining a function to seed (populate) the Category model with the data from categoryData.
const seedCategories = () => Category.bulkCreate(categoryData);
// Exporting the seedCategories function to be used elsewhere.
module.exports = seedCategories;
