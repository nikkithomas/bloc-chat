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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/rooms.html',
        controller: 'RoomsCtrl'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });
