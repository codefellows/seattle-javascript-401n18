'use strict';

const io = require('socket.io-client');

const host = 'http://localhost:3000';

const socket = io.connect(host);
const houseSocket = io.connect(`${host}/house`);

// 6. Say "hello" to the server
// 7. Server (hub.js line 32) will say welcome to the client
socket.emit('hello', {name:'Cathy', age:NaN});

// 8. Tell the server 'open-door'
// 9. Server (hub.js line 19 tells everyone in the House that a possible break-in)
// 10. Server (hub.js) line 20, tells everyone in the house, in the kitchen that their door is open
houseSocket.emit('open-door', 'kitchen');

