'use strict';

const Tree = require('./binary-tree.js');
const Node = require('./node.js');

describe('Tree', () => {

  const tree = new Tree();

  beforeAll( () => {

    // Binary Search Tree...
    // tree.add(9); tree.add(4);

    // Binary tree, so this all by hand
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    const six = new Node(6);
    const twelve = new Node(12);
    const eleven = new Node(11);
    const twentytwo = new Node(22);

    tree.root = nine;
    nine.left = four;
    nine.right = twelve;
    four.left = three;
    four.right = six;
    twelve.left = eleven;
    twelve.right = twentytwo;

  });

  xit('binary search tree can add a root', () => {
    const testTree = new BinarySearchTree();
    testTree.add(9);
    expect(tree.root.value).toEqual(9);
    testTree.add(4);
    expect(tree.root.left.value).toEqual(4);
  });

  it('is a tree', () => {
    // is tree an "instanceOf" BinarySearchTree
  });

  it('has a valid root', () => {
    expect(tree.root.value).toEqual(9);
  });

  it('pre-order works right', () => {

    console.log(tree.preOrder());
  });

  it('in-order is a sorted array', () => {
    /*
      const tree = new BinarySearchTree();
      tree.add(5);
      tree.add(4);
      tree.add(9);
      tree.add(8);
      const list = tree.inOrder();
      expect(list).toEqual(4,5,8,9);
    */
    console.log(tree.inOrder() );
    console.log(tree.inOrderWithoutHelper(tree.root) );
  });

  it('post-order is in the right order', () => {
    console.log(tree.postOrder());
  });

  it('breadth first strips the tree', () => {
    console.log(tree.breadthFirst());
  });

});
