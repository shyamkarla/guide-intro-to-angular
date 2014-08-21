angular.module('EmailApp', [
  'ngRoute',
  // 'ngSanitize'
]).config(function ( $routeProvider ) {
  'use strict';
  // configure urls
  $routeProvider
    // inbox route
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl', // map js to html scope
      controllerAs: 'inbox' // alias of the js scope in html
    })
    // .when('/inbox/email/:id', { // dynamic id
    //   templateUrl: 'views/email.html',
    //   controller: 'EmailCtrl',
    //   controllerAs: 'email'
    // })
    .otherwise({ // default
      redirectTo: '/inbox'
    });
});
