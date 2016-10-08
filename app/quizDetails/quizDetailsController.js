finomenaApp.controller('quizDetailsController',
function quizDetailsController($scope, quizData){



  $scope.quizData = quizData.quizQuestions;
  $scope.score = 0;
  $scope.activeQuestion = -1;
  $scope.percentage = 0;
  $scope.totalQuestions = $scope.quizData.length;
  $scope.val = false;
  $scope.myName = '';

  $scope.selectAnswer = function(qIndex, aIndex){
          $scope.quizData[qIndex].selected = aIndex ;
          var correctAnswer = $scope.quizData[qIndex].correctValue;
          if( aIndex === correctAnswer){
            $scope.quizData[qIndex].correct = 1;
            $scope.score += 1;
            $scope.activeQuestion += 1;
          }
          else {
            $scope.quizData[qIndex].correct = 0;
            $scope.activeQuestion += 1;
          }
        $scope.percentage = (($scope.score / $scope.totalQuestions)*100).toFixed(2);
      };

  $scope.selectContinue = function(){
      return $scope.activeQuestion += 1;
    };

  $scope.selectName = function(){
    $scope.val = true;
  };


});
