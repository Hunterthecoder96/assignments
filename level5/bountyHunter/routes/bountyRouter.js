const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid');
const Bounty = require('../models/bounty');

bountyRouter.use(express.json());

bountyRouter.get('/', (req, res, next) => {
  Bounty.find((err, bounties) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(bounties);
  });
});

bountyRouter.post('/', (req, res, next) => {
  const newBounty = new Bounty(req.body);
  newBounty.save((err, savedBounty) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(201).send(savedBounty);
  });
});

bountyRouter.delete('/:bountyId', (req, res) => {
  Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send('successfully delete bounty!');
  });
});

bountyRouter.put('/:bountyId', (req, res) => {
  Bounty.findOneAndUpdate(
    { _id: req.params.bountyId },
    req.body,
    { new: true },
    (err, updatedBounty) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(201).send(updatedBounty);
    }
  );
});

// bountyRouter.put('/:bountyId', (req, res) => {
//   const bountyId = req.params.bountyId;
//   const bountyIndex = bounties.findIndex(
//     (bounties = bounties._id === bountyId)
//   );
//   const updatedBounty = Object.assign(bounties[bountyIndex], req.body);
//   res.send(updatedBounty);
// });

module.exports = bountyRouter;
