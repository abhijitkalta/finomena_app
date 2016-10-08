finomenaApp.factory('quizData', function() {
  var correctAnswers = [1, 2, 3, 0, 2, 0, 3, 2, 0, 3];
  var quizQuestions  =
  [

  {
    "question" : "What is the number of states in India?",
    "answers"  : [
      {"id"  : 0, "text" : "14"},
      {"id"  : 1, "text" : "16"},
      {"id"  : 2, "text" : "25"},
      {"id"  : 3, "text" : "29"}
    ],
    "correctValue"  : 3,
    "selected" : null,
    "correct"  : null
  },
  {
    "question" : "Which is the first state to be formed on the basis of language?",
    "answers"  : [
      {"id"  : 0, "text" : "Andhra Pradesh"},
      {"id"  : 1, "text" : "Bombay"},
      {"id"  : 2, "text" : "Madhya Bharat"},
      {"id"  : 3, "text" : "Meghalaya"},
    ],
    "correctValue"  : 0,
    "selected" : null,
    "correct"  : null,

  },
  {
    "question" : "When was Burma was separated from India?",
    "answers"  : [
      {"id"  : 0, "text" : "1948"},
      {"id"  : 1, "text" : "1901"},
      {"id"  : 2, "text" : "1937"},
      {"id"  : 3, "text" : "1945"}
    ],
    "correctValue"  : 2,
    "selected" : null,
    "correct"  : null
  },
  {
    "question" : "When did India become a republic?",
    "answers"  : [
      {"id"  : 0, "text" : "1935"},
      {"id"  : 1, "text" : "1947"},
      {"id"  : 2, "text" : "1950"},
      {"id"  : 3, "text" : "1945"}
    ],
    "correctValue"  : 2,
    "selected" : null,
    "correct"  : null
  },
  {
    "question" : "Which state was divided into Maharashtra and Gujarat in 1960?",
    "answers"  : [
      {"id"  : 0, "text" : "Bombay"},
      {"id"  : 1, "text" : "Madras"},
      {"id"  : 2, "text" : "Hyderabad"},
      {"id"  : 3, "text" : "Mysore"}
    ],
    "correctValue"  : 0,
    "selected" : null,
    "correct"  : null
  }
] ;

var dataObj = {
  quizQuestions: quizQuestions

};

return dataObj;

});
