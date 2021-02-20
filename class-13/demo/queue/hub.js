'use strict';

const uuid = require('uuid').v4;
const io = require('socket.io')(3000);

// A keyed queue. There's no order presumed here, messages just get delivered and
// removed from this list as the are received.
const queue = {
  chores: {}
};

const family = io.of('/family');

family.on('connection', socket => {

  socket.on('new chore', payload => {
    // create an id
    let id = uuid();
    queue.chores[id] = payload;
    socket.emit('added');
    family.emit('chore', { id, payload });
  });

  socket.on('getall', () => {
    Object.keys(queue.chores).forEach(id => {
      socket.emit('chore', { id, payload: queue.chores[id] });
    })
  });

  socket.on('received', message => {
    delete queue.chores[message.id];
  });

})

