'use strict';

const io = require('socket.io-client');

let host = 'http://localhost:3000';

let mainConnection = io.connect(host);
let exConnection = io.connect(`${host}/extremities`);


mainConnection.emit('light', 98);

exConnection.emit('wet', 'from rain');
