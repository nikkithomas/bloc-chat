'use strict';

/**
 * @ngdoc function
 * @name blocChatApp.controller:ModalCtrl
 * @description
 * # ModalCtrl
 * Controller of the blocChatApp
 */
angular.module('blocChatApp')
  .controller('ModalCtrl', function ($scope) {
  $scope.modalShown=false;
  $scope.toggleModal=function(){
  $scope.modalShown=!$scope.modalShown;
  };


  });



angular.module('blocChatApp').directive('modalDialog', function(Room) {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, 
    transclude: true, 
    link: function(scope, element, attrs) {

      // console.log(Room);







      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;

      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
        scope.hideModal = function() {
          scope.show = false;
        };

      // scope.rooms=Room.get();
      // scope.room={rmName:''};

      scope.addRoom=function(){
        
        Room.create(scope.room, function(){
          scope.room={rmName:''};
        });
      };





    },
    template: "<div class='ng-modal' ng-show='show'>"+
    "<div class='ng-modal-overlay' ng-click='hideModal()'>"+
    "</div><div class='ng-modal-dialog' ng-style='dialogStyle'>"+
    "<form role='form'>"+
    "<div class='form-group'>"+
    "<h3>Create new room</h3>"+
    "<label for='newRoom'>Enter a room name</label>"+
    "<input type='newRoom' class='form-control' id='newRoom' placeholder='Enter a name' ng-model='room.rmName' />"+
    "</div>"+
    "<button type='sumbit' class='btn btn-default' ng-click='addRoom()' ng-model='room.rmName'>Create Room</button>"+
    "<button type='submit' class='btn btn-default' ng-click='hideModal()'>Cancel</button>"+
    "</form>"+
    "<div class='ng-modal-dialog-content' ng-transclude>"+
    "</div>"+
    "</div>"+
    "</div>"
  };
});


