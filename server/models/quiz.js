const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: Array
}, { timestamps: true })

module.exports = mongoose.model('Quiz', QuizSchema)
