// Importing required dependencies and modules
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection'); // Importing sequelize connection
const Product = require('./Product'); // Importing Product model
const Tag = require('./Tag'); // Importing Tag model

// Defining the ProductTag class as an extension of the Sequelize Model class
class ProductTag extends Model {}

// Initializing the ProductTag model with attributes and options
ProductTag.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // define Foreign keys
    product_id: {
      type: DataTypes.INTEGER,
      references: { model: Product, key: "id"} // Creating a foreign key relationship to the Product model
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: { model: Tag, key: "id"} // Creating a foreign key relationship to the Tag model
    }
  },
  {
    sequelize, // Passing the sequelize connection to the model
    timestamps: false, // Disabling automatic timestamps for the model
    freezeTableName: true, // Ensuring that the table name matches the model name
    underscored: true, // Using underscores in the table and column names
    modelName: 'product_tag', // Setting the model name for internal use
  }
);

// Exporting the ProductTag model for use in other parts of the application
module.exports = ProductTag;