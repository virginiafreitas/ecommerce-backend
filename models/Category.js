// Import dependencies
const { Model, DataTypes } = require('sequelize');

// Importing the Sequelize instance from connection.js
const sequelize = require('../config/connection.js');

// Define Category Model
class Category extends Model {}

// Initialize the Category model with attributes and options
Category.init(
  {
    id:{
      type: DataTypes.INTEGER, // Data type for the 'id' field is INTEGER
      allowNull: false,        // 'id' cannot be null
      primaryKey: true,        // 'id' is the primary key
      autoIncrement: true      // 'id' is auto-incremented
    },
    category_name:{
      type: DataTypes.STRING,  // Data type for the 'category_name' field is STRING
      allowNull: false         // 'category_name' cannot be null
    }
  },
  {
    sequelize,                 // Sequelize instance to use for this model
    timestamps: false,         // Disable automatic timestamp fields (createdAt, updatedAt)
    freezeTableName: true,     // Prevent Sequelize from pluralizing the table name
    underscored: true,         // Use snake_case for column names instead of camelCase
    modelName: 'category',     // Use 'category' as the model name in Sequelize
  }
);

// Export the Category model for use in other parts of the application
module.exports = Category;