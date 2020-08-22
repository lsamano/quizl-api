const express = require('express');
const router = express.Router();

const quizzesController = require('./controllers/quizzesController');

router.route('/')
.get(quizzesController.index);

module.exports = router;
