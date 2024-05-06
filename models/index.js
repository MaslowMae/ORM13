// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const sequelize = require('../config/connection');

async function syncDatabase(){
  try{
  await sequelize.sync({ force: true, alter:true });
  console.log('Database synced!');
} catch (error) {
  console.log('error syncing database',error);
}
}
// syncDatabase();

// Products belongsTo Category
// Categories have many Products
// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'product_id',
});
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
