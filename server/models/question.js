const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  questionNumber: Number,
  text: String,
  answerIndex: Number,
  choices: [String]
}, { timestamps: true });

module.exports = {
  QuestionSchema: QuestionSchema,
  model: mongoose.model('Question', QuestionSchema)
};
