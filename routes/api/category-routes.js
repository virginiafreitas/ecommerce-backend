const router = require('express').Router();
const { Category, Product } = require('../../models');

// Create an Express router instance

// GET (find) all categories with associated Products (the `/api/categories` endpoint)
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });
    // Respond with 200 OK and the retrieved data in JSON format
    res.status(200).json(categoryData);
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error
    res.status(500).json(err);
  }
});
// GET (find) a specific category by its ID with associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk (req.params.id, {
      include: [{ model: Product }],
    });
    // If no category is found, respond with a 400 Bad Request
    if (!categoryData) {
      res.status(400).json({ message: 'No category found with that ID' });
      return;
    }
    // Respond with 200 OK and the retrieved data in JSON format
    res.status(200).json(categoryData);
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error
    res.status(500).json(err);
  }
});

// POST (create) a new category using the provided request body
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    // Respond with 200 OK and the created category data in JSON format
    res.status(200).json(categoryData);
  } catch (err) {
    // If an error occurs, respond with a 400 Bad Request
    res.status(400).json(err);
  }
});

// PUT (update) an existing category by its ID
router.put('/:id', async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    // If no category is found for update, respond with a 404 Not Found
    if (!categoryData[0]) {
      res.status(404).json({ message: 'No category found with this ID' });
      return;
    }
    // Respond with 200 OK and the updated category data in JSON format
    res.status(200).json(categoryData);
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error
    res.status(500).json(err);
  }
});

// DELETE a category by its ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      },
    });
    // If no category is found for deletion, respond with a 404 Not Found
    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this ID' });
      return;
    }
    // Respond with 200 OK and a success message
    res.status(200).json('Category has been deleted');
  } catch (err) {
    // If an error occurs, respond with a 500 Internal Server Error
    res.status(500).json(err);
  }
});

// Export the defined router for use in other modules
module.exports = router;
