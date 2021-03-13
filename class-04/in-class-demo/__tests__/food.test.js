'use strict';

require('@code-fellows/supergoose');

const FoodCollection = require('../models/food-collection.js');
const Food = require('../models/food-collection.js');
const food = new Food();

describe('Food Collection', () => {
  // this test is independent from the test below
  // hence, why it is in it's own "it" block
  it('can create a new item food item', () => {
    let testFood = { name: 'test food item', calories: 99999, type: 'VEG' };
    let expected = { name: 'test food item', calories: 99999, type: 'VEG' };

    return food.create(testFood)
      .then(record => {
        console.log('test food item from DB:', record);
        Object.keys(testFood).forEach(key => {
          expect(record[key]).toEqual(expected[key]);
        });
      })
  });

  it('can get a food item', () => {
    let testFood = { name: 'test food item', calories: 99999, type: 'VEG' };
    let expected = { name: 'test food item', calories: 99999, type: 'VEG' };

    return food.create(testFood)
      .then(record => {
        return food.get(record._id)
          .then(item => {
            Object.keys(testFood).forEach(key => {
              expect(item[key]).toEqual(expected[key]);
            });
          });
      });
  });
});