'use strict';

app.controller('RoomsCtrl',function($scope, Room){
  $scope.rooms=Room.get();
  $scope.room={rmName:''};

  $scope.addRoom=function(){
    Room.save($scope.room, function(ref){
      $scope.rooms[ref.name]=$scope.room;
      $scope.room={rmName:''};

    });

  };

});