'use strict';

const reverse = require('../reverse.js');

describe('Array Rerverse', () => {

  it('should reverse the array', () => {
    let myArray = [1,2,3,4,5];
    let expected = [5,4,3,2,1];
    reverse(myArray);
    expect(myArray).toEqual(expected);
  });

});
