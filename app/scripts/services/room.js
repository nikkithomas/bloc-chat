'use strict';

/**
 * @ngdoc service
 * @name blocChatApp.Room
 * @description
 * # Room
 * Factory in the blocChatApp.
 */
angular.module('blocChatApp')
  .factory('Room', function ($firebase, FIREBASE_URL) {
    // Service logic
    // ...

    var ref= new Firebase(FIREBASE_URL);
    var rooms=$firebase(ref.child('rooms')).$asArray();

    var Room={
      all:rooms,
      create:function(room, callback){
        callback();
        return rooms.$add(room);
      },
      get: function(roomId){
        return $firebase(ref.child('rooms').child(roomId)).$asObject();
      }

      

    };

    return Room;

  

    // Public API here


    //return $resource('https://bloc-chat-app.firebaseio.com/rooms/:id.json');

    //var firebaseRef=new Firebase('https://bloc-chat-app.firebaseio.com/rooms/:id.json');

    //var rooms=$resource(firebaseRef.child('rooms')).$asArray();

    //return{
      //all: rooms
    //}

    
  });
