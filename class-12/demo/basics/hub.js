'use strict';

// brain.js

const port = process.env.PORT || 3000;

// Get our connections built

// This is the "/" (home) route
const io = require('socket.io')(port);

// Global Hub (/) -- all connections and all events go to everyone that connects
// On each connection, a callback is run, where we can identify the users' socket
// Identify the events that the server (hub) handles and what it'll do in response

io.on('connection', (socket) => {

  console.log('Welcome, your socket id is:', socket.id);

  socket.on('hello', (payload) => {
    console.log('The server heard the hello event. Payload:', payload);
    // the client is going to hear this and run some code
    // Technically, you are calling a function on some other app, over the internet!
    io.emit('hi', `Hi, ${payload}`);
  });

  socket.on('goodbye', (payload) => {
    console.log('The server heard the goodbye event');
    io.emit('bye');
  });

})
