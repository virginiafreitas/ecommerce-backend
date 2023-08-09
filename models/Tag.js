// import dependencies
const { Model, DataTypes } = require('sequelize'); // Importing necessary components from Sequelize library

const sequelize = require('../config/connection'); // Importing the database connection from the specified path.
const Product = require('./Product'); // Importing the Product model from the specified path.
const Tag = require('./Tag'); // Importing the Tag model from the specified path.


//define class ProductTag
class ProductTag extends Model {} // Defining a class named ProductTag that extends the Sequelize Model class.

ProductTag.init(
  {
    id:{
      type: DataTypes.INTEGER, // Data type for the 'id' field is INTEGER.
      allowNull: false, // The 'id' field cannot be null.
      primaryKey: true, // The 'id' field is the primary key.
      autoIncrement: true, // The 'id' field auto-increments.
    },
    // Define Foreign keys
    product_id: {
      type: DataTypes.INTEGER, // Data type for the 'product_id' field is INTEGER.
      references: { model: Product, key: "id" } // Creating a foreign key relationship with the 'id' field of the Product model.
    },
    tag_id: {
      type: DataTypes.INTEGER, // Data type for the 'tag_id' field is INTEGER.
      references: { model: Tag, key: "id" } // Creating a foreign key relationship with the 'id' field of the Tag model.
    }
  },
  {
    sequelize, // Passing the database connection to the model.
    timestamps: false, // Disabling automatic timestamp fields like 'createdAt' and 'updatedAt'.
    freezeTableName: true, // Prevents Sequelize from automatically pluralizing the table name.
    underscored: true, // Use underscores in the table name instead of camel case.
    modelName: 'product_tag', // The name to use for the model. It'll be used in queries and associations.
  }
);

module.exports = ProductTag; // Exporting the ProductTag model.