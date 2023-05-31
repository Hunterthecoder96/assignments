const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const longboardSchema = new Schema({
  brand: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('longboard', longboardSchema);
