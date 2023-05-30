const express = require('express');
const fruitRouter = express.Router();
const Fruit = require('../model/fruit.js');

fruitRouter.get('/', (req, res, next) => {
  Fruit.find((err, fruits) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(fruits);
  });
});

fruitRouter.post('/', (req, res, next) => {
  const newFruit = new Fruit(req.body);
  newFruit.save((err, savedFruit) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedFruit);
  });
});
module.exports = fruitRouter;
