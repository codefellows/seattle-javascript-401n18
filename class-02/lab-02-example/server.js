'use strict';

const express = require('express');
const app = express();
const dotenv = require('dotenv');
const validate = require('./middleware/validate.js');
const errors = require('./middleware/errors.js');

dotenv.config();

const PORT = process.env.PORT || 3000;

// always stick this in your server file
app.use(express.json());
// app.use(logger);

// http://localhost:3333/person?name=brian
app.get('/person', validate, (req, res) => {
  let name = req.query.name;
  res.status(200).json({ name });
});

app.use(errors);

// we need to be able to handle an error if our validator
// doesn't work -> thus sending back a 500 to the user
app.listen(PORT, () => {
  console.log(`listening on: ${PORT}`);
});