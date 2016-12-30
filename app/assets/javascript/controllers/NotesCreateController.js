angular.module('NoteWrangler').controller('NotesCreateController',function(Note,$scope,$location){
  $scope.note = new Note();
  $scope.isSubmitting = false;
  $scope.saveNote = function(note){
    $scope.isSubmitting = true;
    //then is succesful 
    note.$save().then(function(){
    $scope.isSubmitting = false;
      $location.path("/notes");
    })
  }

});
