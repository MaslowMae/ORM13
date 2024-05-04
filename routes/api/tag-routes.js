const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll ({
      include: [{ model: Product, through: ProductTag, as: 'product_tags' }]
    });
    if (!tag) {
      res.status(404).json({ message: "No product tag found" });
    }else{
      res.json(tag);
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "get product tag server error"})
  }
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag, as: 'product_tags' }]
    });
    if (!tag) {
      res.status(404).json({ message: "No tag found with that id" });
    }else{
      res.json(tag);
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "get tag server error"})
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.put('/:id', async (req, res) => {
  try {
    // Update a tag's name by its `id` value
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
    } else {
      await tag.update(req.body);
      res.json(tag);
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating tag' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // Delete a tag by its `id` value
    const tag = await Tag.findByPk(req.params.id);
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
    } else {
      await tag.destroy();
      res.json({ message: 'Tag deleted successfully' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
