'use strict';

class Stack {
  constructor() {
    this.top = null;
    this.storage = [];
  }

  // push to the top of the stack
  push(item) {
    this.storage.push(item);
    this.top = item;
  }

  // pop off the top of the stack
  pop() {
    let item = this.storage.pop();
    this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];
  }

  // show me the top of the stack
  peek() {
    return this.top;
  }
}

module.exports = Stack;

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log('stack', stack);