const express = require('express');
const body_parser = require('body-parser');
var app = express();

// Config
var port = process.env.PORT || 3000;

app.use(body_parser.json());

app.use('/api/v1', require('./routes/api/degree.js')(express));

var server = app.listen(port, function(){
  console.log('Server Active On', port);
});

module.exports = server;
