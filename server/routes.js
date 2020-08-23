const express = require('express');
const router = express.Router();

const quizzesController = require('./controllers/quizzesController');

router.route('/')
.get(quizzesController.index);

router.route('/:id')
.get(quizzesController.show);

module.exports = router;
