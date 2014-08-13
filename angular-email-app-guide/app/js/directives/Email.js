/**
 * Directive: Email <email></email>
 */

angular.module('app').directive('email', function email () {

  'use strict';

  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    template: [
      '<div class="email">',
        '<div class="email__info">',
          '<p class="email__list-from">',
            '{{ email.message.from }}',
          '</p>',
          '<p class="email__list-date">',
            '{{ email.message.date | date: \'dd/MM/yyyy\' }}',
          '</p>',
          '<p class="email__list-subject">',
            '{{ email.message.subject }}',
          '</p>',
          '<a href="" ng-click="reply = !reply;" class="email__reply">',
            'Reply',
          '</a>',
          '<a ng-href="/#/inbox" class="email__back">',
            'Back',
          '</a>',
        '</div>',
        '<div class="email__content" ng-bind-html="email.message.content"></div>',
        '<div class="email__response" ng-show="reply">',
          '<textarea ng-model="response" class="email__response-text" placeholder="Enter a reply">',
          '</textarea>',
          '<a href="" ng-click="email.reply(response);">',
            'Send',
          '</a>',
        '</div>',
      '</div>'
    ].join(''),
    controllerAs: 'email',
    controller: function ($routeParams, $scope, EmailFactory) {
      this.message = {};
      this.reply = function (message) {
        EmailFactory.reply(message);
      };
      var getmessage = EmailFactory.getMessage($routeParams);
      if (getmessage) {
        getmessage.then(angular.bind(this, function (response) {
          EmailFactory.message = response;
          this.message = EmailFactory.message;
          $scope.$parent.email.title = this.message.subject;
        }));
      }
    },
    link: function ($scope, $element, $attrs, $ctrl) {
      var textarea = $element.find('.email__response-text')[0];
      $scope.$watch('reply', function (newVal, oldVal) {
        if (newVal === oldVal) return;
        if (newVal) {
          setTimeout(function () {
            textarea.focus();
          }, 0);
        }
      })
    }
  };
});
