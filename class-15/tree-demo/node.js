'use strict';

class Node {

  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.next = null; // this would only be used on LL/Stack/Q
  }
}

module.exports = Node;
