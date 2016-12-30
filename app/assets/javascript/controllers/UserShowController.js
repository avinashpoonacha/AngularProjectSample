angular.module('NoteWrangler').controller('UserShowController',function(User,$scope,$routeParams){
$scope.users = User.get({id:$routeParams.id});
});
