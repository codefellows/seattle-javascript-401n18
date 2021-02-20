angular.module('counterApp', [])
  .controller('CounterController', function () {
    let counter = this;
    counter.count = 0;
    counter.polarity = '';

    counter.increment = function () {
      counter.count = counter.count + 1;
      if (counter.count > 0) { counter.polarity = "positive"; }
    };

    counter.decrement = function () {
      counter.count = counter.count - 1;
      if (counter.count < 0) { counter.polarity = "negative"; }
    }

  });