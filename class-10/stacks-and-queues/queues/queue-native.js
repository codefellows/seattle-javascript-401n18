'use strict';

function Queue() {
  this.next = null;
  this.length = 0;
}

Queue.prototype.enqueue = function(value) {
  this[this.length] = value;
  if (!this.next) this.next = 0;
  this.length++;
}

module.exports = Queue;