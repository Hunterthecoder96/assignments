const express = require('express');
const { expressjwt } = require('express-jwt');
const publicRouter = express.Router();
const issue = require('../models/issue.js');
const Comment = require('../models/comments.js');

publicRouter.get('/', (req, res, next) => {
  issue.find((err, issues) => {
    if (err) {
      res.status(500);
      return next(err);
    }
    return res.status(200).send(issues);
  });
});

//like
publicRouter.put('/like/:issueId', (req, res, next) => {
  issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { upVotes: req.auth._id },
      $pull: { downVotes: req.auth._id },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedIssue);
    }
  );
});

publicRouter.put('/dislike/:issueId', (req, res, next) => {
  issue.findOneAndUpdate(
    { _id: req.params.issueId },
    {
      $addToSet: { downVotes: req.auth._id },
      $pull: { upVotes: req.auth._id },
    },
    { new: true },
    (err, updatedIssue) => {
      if (err) {
        res.status(500);
        return next(err);
      }
      return res.status(200).send(updatedIssue);
    }
  );
});

// publicRouter.put(
//   '/like/:issueId',
//   expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
//   async (req, res, next) => {
//     try {
//       const public = await issue.findById(req.params.issueId);
//       if (!public) {
//         return res.status(404).json({ msg: 'issue not found' });
//       }
//       if (
//         public.likes.filter((like) => like.user.toString() === req.auth._id)
//           .length > 0
//       ) {
//         return res.status(400).json({ msg: 'already liked issue' });
//       }
//       public.likes.unshift({ user: req.auth._id });
//       await issue.save();
//       res.json(issue.likes);
//     } catch (err) {
//       console.log(err.message);
//       res.status(500).send('server error');
//     }
//   }
// );

// publicRouter.put(
//   'unlike/:issueId',
//   expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }),
//   async (req, res, next) => {
//     try {
//       const issue = await Issue.findbyId(req.params.issueId);
//       if (!issue) {
//         return res.status(404).json({ msg: 'issue not found' });
//       }
//       if (
//         issue.likes.filter((like) => like.user.toString() === req.auth._id)
//           .length === 0
//       ) {
//         return res.status(400).json({ msg: 'issue has not yet been like' });
//       }
//       const removeIndex = blog.likes
//         .map((like) => like.user.toString())
//         .indexOf(req.auth._id);

//       issue.likes.splice(removeIndex, 1);
//       await issue.save();
//       res.json(issue.likes);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('server error');
//     }
//   }
// );

module.exports = publicRouter;
