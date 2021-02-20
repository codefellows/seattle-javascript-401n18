'use strict';

const mongoose = require('mongoose');
const Food = require('./models/food-model');

const MONGOOSE_URI = 'mongodb://localhost:27017/food';

mongoose.connect(MONGOOSE_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const doDataStuff = async () => {

  let carrot = {
    name: 'Carrots',
    calories: 25,
    type: 'VEGETABLE'
  };


  // Creating a resource always returns the thing that got created
  let food = new Food(carrot);
  await food.save()
  console.log('Food Created', food);

  // Getting one, just gives you an object that is the one
  let oneFood = await Food.findById(food.id);
  console.log('One Food', oneFood);

  // Getting all ... an array!
  let allFood = await Food.find({});
  console.log('All Food', allFood);

  // Disconnect from Mongo
  mongoose.disconnect();

};

doDataStuff();
