const express = require('express');
const shortboardRouter = express.Router();
const Shortboard = require('../models/Shortboard');

// shortboardRouter.use(express.json());

shortboardRouter.get('/', (req, res, next) => {
  Shortboard.find((err, shortboard) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(shortboard);
  });
});

shortboardRouter.post('/', (req, res, next) => {
  const newShortboard = new Shortboard(req.body);
  newShortboard.save((err, savedShortboards) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedShortboards);
  });
});

shortboardRouter.delete('/:shortboardId', (req, res) => {
  Shortboard.findOneAndDelete(
    { _id: req.params.shortboardId },
    (err, deletedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send('successfully deleted shortboard');
    }
  );
});

shortboardRouter.put('/:shortboardId', (req, res) => {
  Shortboard.findOneAndUpdate(
    { _id: req.params.shortboardId },
    req.body,
    { new: true },
    (err, updatedShortboard) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedShortboard);
    }
  );
});

module.exports = shortboardRouter;
