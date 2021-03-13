'use strict';

// "class" is used in many modern programming languages
// and it provides us with structure and readability that old JS didn't

// this model is meant to be dynamic, meaning it can "get, create, update, delete" any type of resource
class ThingsModel {
  constructor() {
    this.id = 0;
    this.db = [];
  }

  // READ -> will work for returning all items in our db or a specific item
  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  // CREATE
  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }

    this.db.push(record);
    return record;
  }

  // UPDATE - placeholder for "real" update
  update(id, obj) {
    if(id) {
      return obj
    }
  }

  // DELETE - placeholder for "real" delete
  delete(id) {
    if (id) {
      return null;
    }
  }
}

module.exports = ThingsModel;