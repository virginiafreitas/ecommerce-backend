// Import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// Import our database connection from config.js
const sequelize = require('../config/connection');
// Import Category model for reference
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Set up fields and rules for Product model
Product.init(
  {
    // Define columns
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: Category, key: "id" } // Establishing a foreign key relationship
    }
  },
  {
    sequelize,             // Providing the database connection
    timestamps: false,     // Disabling automatic timestamp fields
    freezeTableName: true, // Using the same model name for the table
    underscored: true,     // Using underscored naming convention for fields
    modelName: 'product',  // Setting the model name
  }
);

// Exporting the Product model for use in other parts of the application
module.exports = Product;