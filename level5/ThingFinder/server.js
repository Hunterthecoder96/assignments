const express = require('express');
const app = express();
const uuid = require('uuidv4');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://jhskolnick100:9PEYJFciRz4dnHvQ@cluster0.ipa71n4.mongodb.net/?retryWrites=true&w=majority',
  () => console.log('Connected to the database.')
);

//middleware
app.use(express.json());
app.use('/fruits', require('./Routes/fruitRouter'));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(8000, () => {
  console.log('the server is running on port 8000');
});
