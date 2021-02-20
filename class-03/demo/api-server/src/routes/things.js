'use strict';

const express = require('express');

const Things = require('../models/things.js');
const things = new Things();

// const app = express();

const router = express.Router();

// RESTful Route Declarations
router.get('/things', getThings);
router.get('/things/:id', getOneThing);
router.post('/things', createThing);
router.put('/things/:id', updateThing);
router.delete('/things/:id', deleteThing);

// RESTful Route Handlers
function getThings(req, res) {
  let allThings = things.get();
  res.status(200).json(allThings);
}

function getOneThing(req, res) {
  const id = parseInt(req.params.id);
  let theThing = things.get(id)
  res.status(200).json(theThing);
}

function createThing(req, res) {
  let obj = req.body;
  let newThing = things.create(obj);
  res.status(200).json(newThing);
}

function updateThing(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedThing = things.update(id, obj)
  res.status(200).json(updatedThing);
}

function deleteThing(req, res) {
  let id = parseInt(req.params.id);
  let deletedThing = things.delete(id);
  res.status(200).json(deletedThing);
}


module.exports = router;
