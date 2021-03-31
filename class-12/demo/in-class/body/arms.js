'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

const socket = io.connect(host);
const peers = io.connect(`${host}/extremities`);

socket.on('brightness', payload => {
  if(payload > 95) {
    console.log('cover the eyes');
  }
});

peers.on('wetness', payload => {
  console.log('Shake it off');
  socket.emit('light', 'sun came out');
});
