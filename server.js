const path = require('path');
const sequelize = require('./config/connection.js');
const express = require('express');
// const Sequelize = require('sequelize');
const routes = require('./routes');




// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// connect to server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


//used 14.25 for help
