angular.module('NoteWrangler').directive('title',function($timeout){
  return function(scope,element,attrs){
    $(element).on('mousehover',function(evt){
      evt.preventDefault();
    })
    $timeout(function(){
        $(element).tooltip();
    });
    scope.$on('$destroy',function(){
      $(element).tooltip('destroy');
    })
  }
})
