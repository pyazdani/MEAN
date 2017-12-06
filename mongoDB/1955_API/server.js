var express = require('express');
var app = express();
var bP = require('body-parser');
// var path = require('path');
var mongoose = require('mongoose');
var PORT = 8000;

app.use(bP.urlencoded({ extended: true }));
app.use(bP.json()); // configures bodyparser to correctly read JSON

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
})
