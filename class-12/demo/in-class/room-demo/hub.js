'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

// How does this server handle each connection?
// This is like the switchboard operators ...
const house = io.of('/house');

house.on('connection', (socket) => {
  console.log('Welcome Home');

  socket.on('enter', payload => {
    // do the login thing ...
    // push to people[]
    socket.join(payload);
  });

  socket.on('open-door', payload => {
    socket.broadcast.emit('break-in', payload);
    io.of('house').to('kitchen').emit('door', payload);
  });

});

io.on('connection', (socket) => {

  console.log('Welcome Aboard', socket.id);

  socket.on('hello', (payload) => {
    console.log('The client name is:', payload);
    socket.emit('hi');
    socket.broadcast.emit('welcome', `Welcome our new friend... ${payload.name}`);
  });

});
