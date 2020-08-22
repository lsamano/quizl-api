const mongoose = require('mongoose');
const { QuestionSchema } = require('./question');

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [QuestionSchema]
}, { timestamps: true })

module.exports = mongoose.model('Quiz', QuizSchema)
