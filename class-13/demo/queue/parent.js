'use strict';

const client = require('socket.io-client');

const socket = client.connect('http://localhost:3000/family');

const chore = process.argv.splice(2)[0]

socket.emit('new chore', chore);

// After we add a chore, the server responds back.
// Since we know this was added to the list, we can exit
socket.on('added', () => {
  socket.disconnect();
})

