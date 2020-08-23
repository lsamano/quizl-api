const Quiz = require('../models/quiz');

const index = function(req, res) {
  Quiz.find()
  .exec(function(error, quizzes) {
    res.status(200).json(quizzes);
  });
}

const show = function(req, res) {
  Quiz.findById(req.params.id)
  .exec(function(error, quiz) {
    res.status(200).json(quiz);
  });
}

module.exports = {
  index,
  show
}
