const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    tag_name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    tag_id:{
      type:DataTypes.INTEGER,
      allowNull: false,
      foreignKey:true,
      references:{
        model:'product_tag',
        key:'tag_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
