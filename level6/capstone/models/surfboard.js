const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const surfboardSchema = new Schema({
  shaper: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    require: true,
  },
  size: {
    type: String,
  },
  image: {
    type: Object,
  },
  rating: [{ type: Number, default: 0 }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Surfboard', surfboardSchema);
