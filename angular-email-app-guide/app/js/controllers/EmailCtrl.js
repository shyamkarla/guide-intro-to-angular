/**
 * Controller: EmailCtrl
 */

angular.module('app').controller('EmailCtrl',
  function EmailCtrl (EmailFactory) {

  'use strict';

  this.title = EmailFactory.title;

});
