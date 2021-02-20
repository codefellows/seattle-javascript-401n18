'use strict';

const express = require('express');

const app = express();

const obj = { name:"Test Person", age: 50 };

app.get('/', (req,res) => res.status(200).json(obj));

app.listen(3000);
