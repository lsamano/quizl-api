const Quiz = require('../models/quiz');

const index = function(req, res) {
  Quiz.find()
  .exec(function(error, quiz) {
    res.status(200).json(quiz);
  });
}

module.exports = {
  index
}
