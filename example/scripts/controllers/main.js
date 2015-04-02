angular.module('app')
  .controller('MainCtrl', ['$scope', '$route', 'Comment',
      function($scope, $route, Comment) {

        $scope.comment = new Comment();
        $scope.comments = Comment.query();

        $scope.newComment    = function() {
          $scope.comment = new Comment();
          $scope.editing = false;
        }

        $scope.activeComment = function(comment) {
          $scope.comment = comment;
          $scope.editing = true;
        }

        $scope.save = function(comment) {
          if ($scope.comment._id) {
            Comment.update({_id: $scope.comment._id}, $scope.comment);
          } else {
            $scope.comment.$save().then(function(response) {
              $scope.comments.push(response)
            });
          }
          $scope.editing = false;
          $scope.comment = new Comment();
        }

        $scope.delete = function(comment) {
          Comment.delete(comment)
          _.remove($scope.comments, comment)
        }

      }
  ]);
