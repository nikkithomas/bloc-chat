'use strict';

app.controller('NavCtrl', function ($scope, $location, Room, Auth) {
  $scope.signedIn=Auth.signedIn;
  $scope.logout=Auth.logout;


  $scope.room = {rmName:''};

  //$scope.submitPost = function () {
    //Post.create($scope.post).then(function (ref) {
      //$location.path('/posts/' + ref.name());
      //$scope.post = {url: 'http://', title: ''};
    //});
  //};

});