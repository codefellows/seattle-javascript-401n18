'use strict';

const express = require('express');

const Food = require('../models/food.js');
const food = new Food();

// const app = express();
const router = express.Router();

// RESTful Route Declarations
router.get('/food', getFood);
router.get('/food/:id', getOneFood);
router.post('/food', createFood);
router.put('/food/:id', updateFood);
router.delete('/food/:id', deleteFood);

// RESTful Route Handlers
function getFood(req, res) {
  let allFood = food.get();
  res.status(200).json(allFood);
}

function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = food.get(id)
  res.status(200).json(theFood);
}

function createFood(req, res) {
  let obj = req.body;
  let newFood = food.create(obj);
  res.status(200).json(newFood);
}

function updateFood(req, res) {
  const id = parseInt(req.params.id);
  const obj = req.body;
  let updatedFood = food.update(id, obj)
  res.status(200).json(updatedFood);
}

function deleteFood(req, res) {
  let id = parseInt(req.params.id);
  let deletedFood = food.delete(id);
  res.status(200).json(deletedFood);
}

module.exports = router;
