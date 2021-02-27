'use strict';

const express = require('express');
const ThingsModel = require('../models/thing.js');
const Things = require('../models/thing.js');
// here, we instantiate the new things model
const items = new Things();

const router = express.Router();

// routes
router.get('/things', getThings); // 1: hit the route -> REST
router.get('/things/:id', getOneThing);
router.post('/things', createThing);
router.put('/things/:id', updateThing);
router.delete('/things/:id', deleteThing);

function getThings(req, res) {
  // 2: get all items from the database -> CRUD
  let all = items.get();
  // 3: send those items back to the user -> RESPONSE
  res.status(200).json(all);
}

function getOneThing(req, res) {
  let id = parseInt(req.params.id);
  let item = items.get(id);
  res.status(200).json(item);
}

function createThing(req, res) {
  let obj = req.body;
  let newItem = items.create(obj);
  res.status(201).json(newItem); 
}

// localhost:3333/things/1
function updateThing(req, res) {
  let id = parseInt(req.params.id);
  let content = req.body;
  let updated = items.update(id, content);
  res.status(200).json(updated);
}

function deleteThing(req, res) {
  let id = parseInt(req.params.id);
  let deleted = items.delete(id);
  res.status(204).send('item deleted');
}

module.exports = router;