const {Sequelize} = require('sequelize');
require("dotenv").config();

const sequelize= new Sequelize({
    dialect: process.env.DB_DIALECT,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    password:process.env.DB_PASS,
    logging:console.log,
});

module.exports= sequelize;