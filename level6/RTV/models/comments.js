const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  upVotes: [
    {
      type: Number,
      default: 0,
    },
  ],
  downVotes: [
    {
      type: Number,
      default: 0,
    },
  ],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Comment', commentSchema);
