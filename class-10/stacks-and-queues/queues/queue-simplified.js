'use strict';

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {
    // push the item to an array (storage mechanism)
    this.storage.push(item);

    // if we just added the first item, set it as the front and the rear
    if (this.storage.length == 1) {
      this.front = item;
      this.rear = item;

      // if we added something other than the first item, it automatically gets added to the rear (FIFO)
    } else {
      this.rear = item;
    }
  }

  dequeue() {
    let item = this.storage.shift(); // grab the first item in the array to dequeue (FIFO)

    // if we removed the last item in the queue, reset the front/rear to null
    if(this.storage.length == 0) {
      this.front = null;
      this.rear = null;

      // otherwise, set the front and rear to their actual positions
    } else {
      this.front = this.storage[0]; // front is always the new first item in the array after the shift of our storage mechansim
      this.rear = this.storage[this.storage.length - 1]; // grab the index value of the last item in the array
    }

    return item; // give me back my dequeued item
  }
}

module.exports = Queue;

let q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();
q.dequeue();

console.log(q);