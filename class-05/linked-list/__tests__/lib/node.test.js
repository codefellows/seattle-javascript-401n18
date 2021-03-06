'use strict';

const Node = require('../../lib/node.js');

// JEST - RUNNER / ASSERTION LIBRARY -> describe, it, expect

// describe -> test suite -> usually a module
describe('NODE CLASS', () => {

  // it -> an individual test -> you can also use test()
  it('can create a new node', () => {
    let val = 'test value';
    let node = new Node(val);

    // expect -> assertions

    // check the node value we just created
    expect(node.value).toEqual(val);

    // ensure our next is null, cause there is only one node
    expect(node.next).toBeNull();
  });
});