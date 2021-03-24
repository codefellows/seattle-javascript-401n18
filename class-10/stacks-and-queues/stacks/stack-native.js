'use strict';

function Stack() {
  this.length = 0;
}

Stack.prototype.push = function(value) {
  this[this.length++] = value;
  return this;
}

Stack.prototype.pop = function() {
  if (this.length === 0) return;
  var result = this[--this.length];
  delete this[this.length];
  return result;
}

module.exports = Stack;