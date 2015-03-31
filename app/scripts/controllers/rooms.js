'use strict';

app.controller('RoomsCtrl',function($scope, Room){
  $scope.rooms=Room.all;
  $scope.room={rmName:''};

  $scope.addRoom=function(){
    Room.create($scope.room).then(function(){
      //$scope.rooms[ref.name]=$scope.room;
      $scope.room={rmName:''};

    });

  };

});