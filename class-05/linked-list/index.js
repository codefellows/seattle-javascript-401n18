'use strict';

const LinkedList = require('./lib/ll.js');

let ll = new LinkedList();

ll.append('first');
ll.append(2);
ll.append('three');
ll.append(4);

console.log(ll);
