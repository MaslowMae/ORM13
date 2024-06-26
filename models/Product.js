// import important parts of dbConnection library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
    Product.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        product_name: {
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'',
    
        },
        price: {
          type:DataTypes.DECIMAL,
          allowNull:false,
          defaultValue: 0.00,
        },
        stock: {
          type:DataTypes.INTEGER,
          allowNull:false,
          defaultValue:0,
        },
        category_id: {
          type:DataTypes.INTEGER,
          allowNull:false,
          defaultValue:0,
          foreignKey:true,
          references: {
            model: 'category',
            key: 'id',
          },
        },
      },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
