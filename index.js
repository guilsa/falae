var express = require('express');
var app = express();
var path = require('path');
var http = require('http').createServer(app);
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

var users = [];

io.on('connection', function(socket){

  socket.on('disconnect', function(e){
    var new_id = this.id.slice(2, this.id.length);
    var getUserName = users.filter(function(current_user) {
      return current_user.id === new_id }
    )[0].name
    io.emit('chat message', "*" + getUserName + " has left the room.");
  });

  socket.on('add user', function(user){
    users.push(user);
    io.emit('auth user', users.indexOf(user));
  });
  socket.on('chat message', function(msg){

    io.emit('chat message', msg);
  });
});
