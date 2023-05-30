const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bountySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  living: {
    type: Boolean,
  },
  value: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('bounty', bountySchema);
