'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

const mainSocket = io.connect(host);
const houseSocket = io.connect(`${host}/house`);

houseSocket.on('connect', socket => {
  console.log('I think I am connected to the house');
  houseSocket.emit('enter', 'kitchen');
});

houseSocket.on('break-in', payload => {
  console.log('some one is trying to get into the', payload);
});

houseSocket.on('door', payload => {
  console.log(payload, 'is open');
});

// 5. we hear "hi" and log it
mainSocket.on('hi', payload => {
  console.log('Wow, so polite!');
});

mainSocket.on('welcome', payload => {
  console.log(payload);
});

// 1. Client sends hello to server
// 2. Server (hub.js line 29 "hears it")
// 3. Server (hub.js line 31 says "hi" back)
// 4. Server (hub.js line 32 says "welcome" to everyone else)
mainSocket.emit('hello', {'name':'John', age:52});
