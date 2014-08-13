/**
 * Module: app
 */
var app = angular.module('app', [
  'ngRoute',
  'ngSanitize'
]);

/**
 * Route provider configration for
 * dynamic view AJAX
 */
app.config(function ($routeProvider) {

  'use strict';

  /**
   * $routeProvider
   */
  $routeProvider
  .when('/inbox', {
    templateUrl: 'views/inbox.html',
    controller: 'InboxCtrl',
    controllerAs: 'inbox'
  })
  .when('/inbox/email/:id', {
    templateUrl: 'views/email.html',
    controller: 'EmailCtrl',
    controllerAs: 'email'
  })
  .otherwise({
    redirectTo: '/inbox'
  });

});
