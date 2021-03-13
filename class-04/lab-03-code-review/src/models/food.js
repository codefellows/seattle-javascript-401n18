'use strict';

class FoodModel {

  constructor() {
    this.id = 0;
    this.db = []
    this.fields = ['name', 'calories', 'type'];
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
      data: {}
    };

    // Only add proper fields to the data
    this.fields.forEach(field => record.data[field] = obj[field]);

    this.db.push(record)
    return record;
  }

  update(id, obj) {
    if (id) {
      this.db = this.db.map(record => {
        if (record.id === id) {
          this.fields.forEach(field => record.data[field] = obj[field] || record.data[field]);
        }
        return record;
      });
      return this.db.find(record => record.id === id);
    }
  }

  delete(id) {
    if (id) {
      console.log('deleting', id);
      this.db = this.db.filter(record => record.id !== id);
      return this.db.find(record => record.id === id);
    }
    return undefined;
  }


}

module.exports = FoodModel;
