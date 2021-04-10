'use strict';

const Node = require('./node.js');

class BinaryTree {

  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];

    let _walk = (node) => {
      nodes.push(node.value);
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
    };

    _walk(this.root);

    return nodes;
  }

  inOrder() {

    let nodes = [];

    // Helper function
    // Scoped to the wrapper function
    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      nodes.push(node.value);
      if(node.right) { _walk(node.right); }
    };

    // Start the process
    _walk(this.root);

    return nodes;

  }

  // this.inOrderWithoutHelper(this.root);
  inOrderWithoutHelper(node, nodes=[]) {

    // Traverse
    if(node.left) {this.inOrderWithoutHelper(node.left, nodes); }

    // Do the Work!
    nodes.push(node.value);

    // Traverse
    if(node.right) {this.inOrderWithoutHelper(node.right, nodes); }

    return nodes;

  }


  postOrder() {

    let nodes = [];
    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      if(node.right) { _walk(node.right); }
      nodes.push(node.value);
    };

    _walk(this.root);

    return nodes;
  }

  breadthFirst() {
    let nodes = [];
    let queue = [];

    queue.push(this.root); // queue.enque();

    while(queue.length) {  // while queue.peek()
      // Do the work ...
      let currentNode = queue.shift(); // queue.dequeue();
      nodes.push(currentNode.value);

      // Keep traversing by queueing up the left and right
      if(currentNode.left) { queue.push(currentNode.left); }
      if(currentNode.right) { queue.push(currentNode.right); }
    }

    return nodes;

  }

}

class BinarySearchTree extends BinaryTree {
  add(value) {
    // do all the add logic here
  }
}

module.exports = BinaryTree;
