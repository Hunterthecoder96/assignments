const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

//Middleware
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGODB_URL, () =>
  console.log('Connected to the database.')
);

app.use('/shortboards', require('./routes/shortboardRouter'));
app.use('/longboards', require('./routes/longboardRouter'));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(9000, () => {
  console.log('the server is running on port 9000');
});
