'use strict';

class ThingsModel {

  constructor() {
    this.id = 0;
    this.db = []
    /*
      [
        {id:x, record: {} }
      ]
    */
  }

  get(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  create(obj) {
    let record = {
      id: ++this.id,
      record: obj
    }
    this.db.push(record)
    return record;
  }

  update(id, obj) {
    if (id) {
      return obj;
    }
  }

  delete(id) {
    if (id) {
      return null;
    }
  }


}

module.exports = ThingsModel;
