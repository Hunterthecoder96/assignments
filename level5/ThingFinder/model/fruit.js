const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('fruit', fruitSchema);
// const fruit = [
//   {
//     type: 'banana',
//     brand: 'chiquita',
//     price: 0.5,
//     _id: uuid(),
//   },
//   {
//     type: 'apple',
//     brand: 'gala',
//     price: 0.5,
//     _id: uuid(),
//   },
//   {
//     type: 'orange',
//     brand: 'naval',
//     price: 0.75,
//     _id: uuid(),
//   },
// ];
