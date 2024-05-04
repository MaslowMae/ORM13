
const router = require('express').Router();
const categoryRoutes = require('./category-routes');
console.log("in api folder");
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');


router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
