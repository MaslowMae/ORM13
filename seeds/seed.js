const Sequelize = require('../config/connection');
const { Category, Product, ProductTag, Tag } = require('../models');

// const productTagData = require('./product-tag-seeds.json');
const tagData = require('./tag-seeds.json');
const productData = require('./product-seeds.json');
const categoryData = require('./category-seeds.json');



const seedDatabase = async () => {
  await Sequelize.sync({ force: true });

  const category = await Category.bulkCreate(categoryData);
  const tag = await Tag.bulkCreate(tagData);
  const products = await Product.bulkCreate(productData);

  console.log(`${products.length} products seeded.`);
// console.log(tagData);
  for (const product of products) {
    const randomTagIds = tag
      .map((mapping) => mapping.tag_id)
      .slice(0, Math.floor(Math.random() * tag.length));
// console.log(randomTagIds);
    await ProductTag.bulkCreate(
      randomTagIds.map((tag_id) => ({
        product_id: product.id,
        tag_id,
      }))
    );
  }
  

  console.log('Database seeded!');

  process.exit(0);
}
seedDatabase();