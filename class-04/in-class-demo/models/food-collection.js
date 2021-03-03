'use strict';

const model = require('./food-model');

// "wrapper" for our CRUD actions against the DB
class FoodCollection {
  constructor() {
    this.model = model;
    this.db = [];
  }

  get(_id) {
    if (_id) {
      return this.model.findOne({ _id }) // findOne is a mongoose method to find one specific item
    } else {
      return this.model.find({});
    }
  }

  create(record) {
    let newRecord = new this.model(record);
    return newRecord.save(); // .save() is a mongoose method to save an item to the db
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true }) // new: true is required to get back the newly updated thing
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = FoodCollection;