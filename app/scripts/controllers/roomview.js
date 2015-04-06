'use strict';

app.controller('RoomViewCtrl', function($scope, $routeParams, Room){
 $scope.room=Room.get($routeParams.roomId);
});