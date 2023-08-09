// Import models from its js files
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations between models

// Each product belongs to a category
Product.belongsTo(Category,{
  foreignKey: 'category_id'
});

// Each category can have multiple products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Many-to-many association: Each product can have multiple tags through the 'ProductTag' table
Product.belongsToMany(Tag, {through: ProductTag});

// Many-to-many association: Each tag can be associated with multiple products through the 'ProductTag' table
Tag.belongsToMany(Product, {through: ProductTag});

// Export the models and associations
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};