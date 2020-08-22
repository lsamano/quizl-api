const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

require('dotenv').config();
const API_PORT = process.env.PORT;
const DB_URI = process.env.DB_URI;

const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());

app.use('/quizzes', routes)

mongoose.connect(DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})

app.listen(API_PORT, () => console.log(`Listening on Port ${API_PORT}...`));
