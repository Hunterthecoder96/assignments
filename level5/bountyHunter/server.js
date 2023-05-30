const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb+srv://jhskolnick100:9PEYJFciRz4dnHvQ@cluster0.ipa71n4.mongodb.net/?retryWrites=true&w=majority',
  () => console.log('Connected to the database.')
);

//middleware(for every request)
app.use(express.json()); //looks for a request body, and turns it into "req.body"
app.use(morgan('dev')); //logs requests to the console

//Routes
app.use('/bounties', require('./routes/bountyRouter.js'));

//Error Handler
app.use((err, req, res, next) => {
  console.log(err);
  return res.send({errMsg:err.message})
});

//server Listen
app.listen(9000, () => {
  console.log('the server is running on port 9000');
});
