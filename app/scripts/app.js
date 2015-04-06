/* global app:true */
/* exported app */

'use strict';

/**
 * @ngdoc overview
 * @name blocChatApp
 * @description
 * # blocChatApp
 *
 * Main module of the application.
 */
var app = angular
  .module('blocChatApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])

  .constant('FIREBASE_URL', 'https://bloc-chat-app.firebaseio.com/')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/rooms.html',
        controller: 'RoomsCtrl'
      })

      .when('/rooms/:roomId',{
        templateUrl:'views/rooms.html',
        controller:'RoomViewCtrl'
      })

      .when('/register',{
        templateUrl:'views/register.html',
        controller:'AuthCtrl',
        resolve:{
          user: function(Auth){
            return Auth.resolveUser();
          }
        }
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
