// Import express and path modules.
var express = require( "express");
var path = require( "path");

// Create the express app.
var app = express();

// Define the static folder.
app.use(express.static(path.join(__dirname, "./static")));

// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

// Root route to render the index.ejs view.
app.get('/', function(req, res) {
 res.render("index");
})

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
   var io = require('socket.io').listen(server);

// when client establishes connection...
io.sockets.on('connection', (socket) => {
    
    // unique ID is assigned
    console.log(socket.id);

    // server socket listens for 'click' from client
    socket.on('click', (data) => {

        console.log(data.message); // message received
        
        // server emits 'response' to client
        socket.emit('response', {msg: 'server to client'});
        
        // broadcast to all except client who clicked
        socket.broadcast.emit('relay', {msg: 'only for the others'});
        
        // broadcast to all clients
        io.emit('broadcast', {msg: 'everyone sees this'});

    });

});