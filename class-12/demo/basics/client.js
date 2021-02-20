'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000'

const socket = io.connect(host);

socket.on('hi', payload => {
  console.log('The server said:', payload)
  // ok, we're done, tell the server
  socket.emit('goodbye');
});

socket.on('bye', handleGoodbye);

function handleGoodbye(payload) {
  console.log('bye');
}

socket.emit('hello', 'John');
