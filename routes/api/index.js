// Import the 'express' library and create a router instance.
const router = require('express').Router();

// Import routes for different categories, products, and tags.
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Mount the imported routes under specific endpoints.
// Requests to /categories will be handled by categoryRoutes.
router.use('/categories', categoryRoutes);
// Requests to /products will be handled by productRoutes.
router.use('/products', productRoutes);
// Requests to /tags will be handled by tagRoutes.
router.use('/tags', tagRoutes);

// Export the router to be used by other parts of the application.
module.exports = router;