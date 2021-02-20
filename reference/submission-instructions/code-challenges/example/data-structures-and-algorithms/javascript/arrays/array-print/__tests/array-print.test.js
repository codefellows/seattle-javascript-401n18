'use strict';

const print = require('../array-print.js');

jest.spyOn(global.console, 'log');

describe('print()', () => {
  it('can print', () => {
    let arr = [1, 2, 3, 4, 5];
    print(arr);
    expect(console.log).toHaveBeenCalledTimes(5);
  });
});
