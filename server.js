//hello
//const can't mutate
//let mutate
const express = require('express');
const app = express();
const PORT = 8080;

require('dotenv').config();

//npm
var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: process.env.DB_NAME
});

connection.connect(function(err) {
  if (err) throw err;
  console.log('connected on MYSQL');
});

//MIDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//public
app.use(express.static('public'));

//routes

//listen
app.listen(PORT, function() {
  console.log('connected on the server');
});
