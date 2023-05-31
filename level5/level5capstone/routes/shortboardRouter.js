const express = require('express');
const shortboardRouter = express.Router();
const shortboards = require('../models/shortboard');

// shortboardRouter.use(express.json());

shortboardRouter.get('/', (req, res, next) => {
  shortboards.find((err, shortboard) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(shortboard);
  });
});

shortboardRouter.post('/', (req, res, next) => {
  const newShortboard = new shortboards(req.body);
  newShortboard.save((err, savedShortboards) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedShortboards);
  });
});

module.exports = shortboardRouter;
