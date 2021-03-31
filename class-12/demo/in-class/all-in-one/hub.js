'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

// How does this server handle each connection?
// This is like the switchboard operators ...

io.on('connection', (socket) => {

  console.log('Welcome Aboard', socket.id);

  socket.on('hello', (payload) => {
    console.log('The client name is:', payload);
    socket.emit('hi');
    socket.broadcast.emit('welcome', `Welcome our new friend... ${payload}`);
  });

});
