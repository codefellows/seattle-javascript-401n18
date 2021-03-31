'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

const socket = io.connect(host);

socket.on('brightness', payload => {
  console.log('turning flash off');
});
