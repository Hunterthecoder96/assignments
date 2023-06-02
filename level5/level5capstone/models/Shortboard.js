const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shortboardSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Shortboard', shortboardSchema);
