'use strict';

/**
 * @ngdoc service
 * @name blocChatApp.Room
 * @description
 * # Room
 * Factory in the blocChatApp.
 */
angular.module('blocChatApp')
  .factory('Room', function ($resource) {
    // Service logic
    // ...

  

    // Public API here
    return $resource('https://bloc-chat-app.firebaseio.com/rooms/:id.json');

    var firebaseRef=new Firebase('https://bloc-chat-app.firebaseio.com/rooms/:id.json');

    var rooms=$resource(firebaseRef.child('rooms')).$asArray();

    return{
      all: rooms
    }




    
  });
