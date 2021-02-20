'use strict';

const mongoose = require('mongoose');
const FoodCollection = require('./models/food-collection');
const food = new FoodCollection();

const MONGOOSE_URI = 'mongodb://localhost:27017/food';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const doDataStuff = async () => {

  let carrot = {
    name: 'Carrots',
    calories: 25,
    type: 'VEGETABLE'
  };


  // Creating a resource always returns the thing that got created
  let newFood = await food.create(carrot);
  console.log('Food Created', newFood);

  // Getting one, just gives you an object that is the one
  let oneFood = await food.get(food.id);
  console.log('One Food', oneFood);

  // Getting all ... an array!
  let allFood = await food.get();
  console.log('All Food', allFood);

  // Disconnect from Mongo
  mongoose.disconnect();

};

doDataStuff();
