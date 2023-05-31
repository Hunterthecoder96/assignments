const express = require('express');
const longboardRouter = express.Router();
const longboards = require('../models/longboard');

// longboardRouter.use(express.json());

longboardRouter.get('/', (req, res, next) => {
  longboards.find((err, longboards) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(longboards);
  });
});

module.exports = longboardRouter;
