'use strict';

const faker = require('faker');
const io = require('socket.io-client');

// const host = 'http://localhost:3000';
const host = 'http://75f6676d5379.ngrok.io';

const socket = io.connect(host);

socket.on('hi', payload => {
  console.log('Wow, so polite!');
});

socket.on('welcome', payload => {
  console.log(payload);
});

socket.emit('hello', {'name':'John', age:52});
