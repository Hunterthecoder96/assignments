const express = require('express');
const longboardRouter = express.Router();
const Longboard = require('../models/Longboard');

// longboardRouter.use(express.json());

longboardRouter.get('/', (req, res, next) => {
  Longboard.find((err, longboards) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(longboards);
  });
});

longboardRouter.post('/', (req, res, next) => {
  const newLongboard = new Longboard(req.body);
  newLongboard.save((err, savedLongboards) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedLongboards);
  });
});

longboardRouter.delete('/:longboardId', (req, res) => {
  Longboard.findOneAndDelete(
    { _id: req.params.longboardId },
    (err, deletedItem) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send('successfully deleted Longboard');
    }
  );
});

longboardRouter.put('/:longboardId', (req, res) => {
  Longboard.findOneAndUpdate(
    { _id: req.params.longboardId },
    req.body,
    { new: true },
    (err, updatedLongboard) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedLongboard);
    }
  );
});

module.exports = longboardRouter;
