const express = require('express');
const surfboardRouter = express.Router();
const Surfboard = require('../models/surfboard');

surfboardRouter.get('/', (req, res, next) => {
  Surfboard.find((err, surfboards) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(surfboards);
  });
});

surfboardRouter.get('/user', (req, res, next) => {
  Surfboard.find({ user: req.auth._id }, (err, surfboards) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(surfboards);
  });
});

surfboardRouter.post('/', (req, res, next) => {
  req.body.user = req.auth._id;
  const newSurfboard = new Surfboard(req.body);
  newSurfboard.save((err, savedSurfboard) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedSurfboard);
  });
});

surfboardRouter.delete('/:surfboardId', (req, res, next) => {
  Surfboard.findOne(
    { _id: req.params.surfboardId, user: req.auth._id },
    (err, deletedSurfboard) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res
        .status(200)
        .send(`successfully deleted surfboard:${deletedSurfboard.model}`);
    }
  );
});

surfboardRouter.put('/:surfboardId', (req, res, next) => {
  Surfboard.findOneAndUpdate(
    { _id: req.params.surfboardId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updated) => {
      if (err) {
        res.status(201).send(updatedSurfboard);
      }
    }
  );
});

module.exports = surfboardRouter;
