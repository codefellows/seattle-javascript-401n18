'use strict';

// mongoose is the connector between our app and the MongoDB database
const mongoose = require('mongoose');
const Food = require('./models/food-model.js');

const MONGODB_URI = 'mongodb://localhost:27017/mongo-db-demo'; // mongo-db-demo is the DB name
const options = { useNewUrlParser: true, useUnifiedTopology: true }; // always pass in these options

// CLARITY!
// MONGODB is the DBMS
// mongoose is the ORM -> connector between our app and MongoDB

mongoose.connect(MONGODB_URI, options);

let connectToDB = async () => {
  let meat = {
    name: 'turtle food',
    calories: 200,
    type: 'MEAT'
  };
  
  let food = new Food(meat);
  await food.save(); // CRUD:  CREATE operation
  
  let allFood = await Food.find({});
  console.log('all added food', allFood); // CRUD:  READ (all items)

  let apple = await Food.findById('603f070a62a6691d26ec04d1'); // CRUD:   READ (single item)
  console.log('my apple', apple);

  let greenApple = await Food.findByIdAndUpdate('603f070a62a6691d26ec04d1', { name: 'greenapple' }); // CRUD:  UPDATE (single property on an item)
  console.log(greenApple);

  let removeApple = await Food.findByIdAndDelete('603f070a62a6691d26ec04d1'); // CRUD:  DELETE (of a single item)

  mongoose.disconnect();
}

connectToDB();

// let apple = await Food.findById();