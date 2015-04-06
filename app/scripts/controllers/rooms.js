'use strict';

app.controller('RoomsCtrl',function($scope, $location, Room){

  $scope.rooms=Room.all;
  $scope.room={rmName:''};

  $scope.addRoom=function(){
    Room.create($scope.room).then(function(ref){
      //$scope.rooms[ref.name]=$scope.room;
      //$scope.room={rmName:''};
      $location.path('/rooms/'+ref.name())

    });

  };

});