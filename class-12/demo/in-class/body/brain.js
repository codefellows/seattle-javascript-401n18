'use strict';

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);

const extremities = io.of('/extremities');

// Global stuff
io.on('connection', (socket) => {
  console.log('Welcome to the main server', socket.id);

  // The entire body cares about light
  socket.on('light', (payload) => {
    socket.broadcast.emit('brightness', payload);
  });

});

extremities.on('connection', (socket) => {
  console.log('You must be an arm or a leg...', socket.id);

  socket.on('wet', payload => {
    socket.broadcast.emit('wetness', payload);
  });
});
