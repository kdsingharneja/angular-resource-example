//think of this as ActiveModel
angular.module('app')
  .provider('Comment', function() {
    this.$get = ['$resource', function($resource) {
      var Comment = $resource('http://localhost:6002/api/comment/:_id', {}, {
        update: {
          method: 'PUT'
        }
      })

      return Comment;
    }];
  });
