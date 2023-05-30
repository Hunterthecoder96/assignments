const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://jhskolnick100:9PEYJFciRz4dnHvQ@cluster0.ipa71n4.mongodb.net/?retryWrites=true&w=majority',
  () => console.log('Connected to the database.')
);

app.use(express.json());
app.use(morgan('dev'));

app.listen(9999, () => {
  console.log('the server is running on port 9999');
});
