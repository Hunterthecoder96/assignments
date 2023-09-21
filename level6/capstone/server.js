const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(express.json());
app.use(morgan('dev'));

mongoose.connect(
  'mongodb+srv://jhskolnick100:Lq75BcDIyDL8qiUm@cluster0.xvqurro.mongodb.net/',

  () => console.log('Connected to the DB')
);

app.listen(6900, () => {
  console.log('server is running on local host 69');
});
