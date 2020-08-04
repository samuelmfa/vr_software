'use strict';
require('dotenv').config();
const mysql = require('mysql');

const conexaoDB = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS
})

module.exports = conexaoDB;

