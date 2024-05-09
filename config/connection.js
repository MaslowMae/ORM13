const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: "mysql", 
    port: 3306
  }
);

// // Create the database if it doesn't exist
// sequelize.query(" CREATE DATABASE IF NOT EXISTS ecommerce_db;")
//   .then(() => {
//     console.log("Database created successfully");
//     // Close the Sequelize connection after query execution
//     sequelize.close();
//   })
//   .catch(err => {
//     console.error("Error executing SQL commands:", err);
//     // Close the Sequelize connection in case of error
//     sequelize.close();
//   });



module.exports = sequelize;

//from Student activity 14.24- bmm

