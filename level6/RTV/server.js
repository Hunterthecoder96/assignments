const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');
const { expressjwt } = require('express-jwt');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
  'mongodb+srv://jhskolnick100:Lq75BcDIyDL8qiUm@cluster0.xvqurro.mongodb.net/',

  () => console.log('Connected to the DB')
);

app.use('/auth', require('./routes/authRouter.js'));
app.use(
  '/api',
  expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] })
);
app.use('/api/issue', require('./routes/issueRouter.js'));

app.use((err, req, res, next) => {
  console.log(err);
  if (err.name === 'UnauthorizedError') {
    res.status(err.status);
  }
  return res.send({ errMsg: err.message });
});

app.listen(4100, () => {
  console.log('server is running on local port 4000');
});
