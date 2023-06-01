const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const mongoose = require('mongoose');

//Middleware
app.use(express.json());
app.use(morgan('dev'));
const route = process.env.MONGODB_URL;
mongoose.set('strictQuery', true);

mongoose.connect(route.toString(), () =>
  console.log('Connected to the database.')
);

app.use('/shortboard', require('./routes/shortboardRouter'));
app.use('/longboard', require('./routes/longboardRouter'));

app.use((err, req, res, next) => {
  console.log(err);
  return res.send({ errMsg: err.message });
});

app.listen(3000, () => {
  console.log('the server is running on port 3000');
});
