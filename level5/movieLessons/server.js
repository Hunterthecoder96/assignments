const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://jhskolnick100:9PEYJFciRz4dnHvQ@cluster0.ipa71n4.mongodb.net/?retryWrites=true&w=majority',
  () => console.log('Connected to the database.')
);

app.use(express.json());
app.use('/movies', require('./Routes/movieRouter'));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(8000, () => {
  console.log('the server is running on port 8000');
});
