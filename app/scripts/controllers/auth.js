'use strict';

app.controller('AuthCtrl', function($scop, $location, Auth, user){
  if (user){
    $location.path('/');
  }
  $scope.register=function(){
    Auth.register($scope.user).then(function(){
      return Auth.login($scope.user).then(function(){
        $location.path('/');
      });
    });
  };
});