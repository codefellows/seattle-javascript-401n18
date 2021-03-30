'use strict';

const {raiseArm} = require('./arms.js');
const faker = require('faker');

describe('The Arm', () => {

  let logSpy;
  let errorSpy;

  beforeEach( () => {
    logSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach( () => {
    logSpy.mockRestore();
  });

  it('does nothing when the brightness is < 90', () => {
    let b = { brightness: 50 };
    raiseArm(b);
    expect(logSpy).not.toHaveBeenCalled();
  });

  it('raises when the brightness is >= 90', () => {

    const number = faker.datatype.number(100);
    // Don't use a non-known value in a test!
    let b = { brightness: 95 };
    raiseArm(b);
    expect(logSpy).toHaveBeenCalledWith('Raise Arm');
  });

});
