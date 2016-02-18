module.exports = function() {
  var db = require('./db.js');
  var Sequelize = require('sequelize');
  var sequelize = db.connection;

  // Defining inventory based on the table schema from the db.js
  return db.rubric;
}();
