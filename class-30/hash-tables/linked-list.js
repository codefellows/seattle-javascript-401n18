'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  /**
   * Build the list up backwards.
   * Start by creating the last node that points to nothing.
   * Then make the second-to-last node and point it to the last node.
   * Then make another node and point it to the second-to-last node.
   * Do this until the list is entirely built up.
   * @param items
   * @returns {LinkedList}
   */
  static fromArray(items) {

    let previousNode = null;

    for (var i = items.length - 1; i >= 0; i--) {
      let value = items[i];
      let node = new Node(value);
      node.next = previousNode;
      previousNode = node;
    }

    // set the head to point to the last node added at the front of the chain.
    let list = new LinkedList();
    list.head = previousNode;
    return list;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    let size = 0;
    let current = this.head;
    while (current) {
      current = current.next;
      size++;
    }
    return size;
  }

  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;

    // step forward node-by-node until one has an empty next value
    while (current.next) {
      current = current.next;
    }

    // add the new value to the empty .next spot that's at the end of the list
    current.next = new Node(value);
  }

  prepend(value) {
    // make a new node with the value
    // have the new node point to the current head.
    // replace the head with the new node.
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  remove(value) {
    // rewrite the head node if the value is at the front.
    if (this.head.value === value) {
      let result = this.head;
      this.head = this.head.next;
      return result;
    }

    // start at the front
    // look for a node that points to the node we want to remove.
    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }

    // save the result
    // make the current node point to the node after the node we're removing
    let result = current.next;
    current.next = current.next.next;
    return result;
  }

  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next = null;

    while (current !== null) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    this.head = prev;
  }

  getMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  getNthFromLast(n) {
    // make two pointers and start them at the front.
    let offset = this.head;
    let nBehind = this.head;

    // move the offset pointer N nodes forward
    for (let i = 0; i < n; i++) {
      offset = offset.next;
    }

    // now move both nodes forward simultaneously.
    // When the offset node hits the end of the list
    // the nBehind node will be N nodes from the end of the list.
    while (offset.next) {
      offset = offset.next;
      nBehind = nBehind.next;
    }
    return nBehind;
  }

  getLast() {
    return this.getNthFromLast(0);
  }

  getNth(n) {
    // step forward N times.
    let current = this.head;
    for (let i = 0; i < n; i++) {
      current = current.next;
    }
    return current;
  }

  getFirst() {
    return this.getNth(0);
  }

  map(cb) {
    let list = new LinkedList();
    if (this.isEmpty()) {
      return list;
    }

    let current = this.head;
    let other = new Node(cb(this.head));
    list.head = other;

    while (current.next) {
      current = current.next;
      other.next = new Node(cb(current));
      other = other.next;
    }
    return list;
  }

  filter(cb) {
    let list = new LinkedList();
    let current = this.head;
    let other = null;
    while (current) {
      if (cb(current)) {
        let node = new Node(current.value);
        if (!list.head) {
          list.head = node;
          other = list.head;
        } else {
          other.next = node;
          other = other.next;
        }
      }
      current = current.next;
    }
    return list;
  }

  reduce(cb, initial) {
    let accumulator = initial;
    let current = this.head;
    while (current) {
      accumulator = cb(accumulator, current);
      current = current.next;
    }
    return accumulator;
  }

  print() {
    let out = '';
    let current = this.head;
    while (current) {
      out += current.value;
      if (current.next) {
        out += ' => ';
      }
      current = current.next;
    }
    return out;
  }
}

module.exports = LinkedList;
