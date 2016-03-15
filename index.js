var express = require('express');
var app = express();
var path = require('path');
// {
//   transports: [ 'xhr-polling', 'websocket' ]
// }
var http = require('http').CreateServer(app);
var io = require('socket.io')(http);

http.listen(process.env.PORT || 3000)

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, './public')));

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('index');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

app.listen(port, function() {
    console.log('app.listen - Our app is running on http://localhost:' + port);
});

http.listen(3000, function(){
  console.log('http - listening on *:3000');
})
