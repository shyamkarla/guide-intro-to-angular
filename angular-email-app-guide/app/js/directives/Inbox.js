/**
 * Directive: Inbox <inbox></inbox>
 */

angular.module('app').directive('inbox', function inbox () {

  'use strict';

  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    template: [
      '<div class="inbox">',
        '<div class="inbox__count">',
          'You have {{ inbox.messages.length && inbox.messages.length || \'no\' }} messages',
        '</div>',
        '<div ng-hide="!inbox.messages.length">',
          '<input type="text" class="inbox__search" ng-model="inbox.search" placeholder="Search by \'from\', e.g. TicketMaster">',
        '</div>',
        '<ul class="inbox__list">',
          '<li ng-show="!inbox.messages.length">',
            'No messages! Try sending one to a friend.',
          '</li>',
          '<li ng-repeat="message in inbox.messages | filter:{ from: inbox.search }">',
            '<div class="inbox__list-info">',
              '<p class="inbox__list-from">',
                'from: {{ message.from }}',
              '</p>',
              '<p class="inbox__list-date">',
                '{{ message.date | date: \'dd/MM/yyyy\' }}',
              '</p>',
              '<p class="inbox__list-subject">',
                '{{ message.subject }}',
              '</p>',
            '</div>',
            '<div class="inbox__list-actions">',
              '<a href="" ng-click="inbox.goToMessage(message.id);">',
                'Read',
              '</a>',
              '<a href="" ng-click="inbox.deleteMessage(id, $index);">',
                'Delete',
              '</a>',
            '</div>',
          '</li>',
        '</ul>',
      '</div>'
    ].join(''),
    controllerAs: 'inbox',
    controller: function (InboxFactory) {
      this.messages = [];
      this.goToMessage = function (id) {
        InboxFactory.goToMessage(id);
      };
      this.deleteMessage = function (id, $index) {
        InboxFactory.deleteMessage(id, $index);
      };
      var getMessages = InboxFactory.getMessages();
      if (getMessages) {
        getMessages.then(angular.bind(this, function (response) {
          // here we bind the response to the Factory
          InboxFactory.messages = response;
          // and also bind the Factory value to the Controller
          // so when we make changes to the InboxFactory
          // such as deleting a message, it instantly
          // updates the Controller's bindings
          this.messages = InboxFactory.messages;
        }));
      }
    },
    link: function ($scope, $element, $attrs, $ctrl) {

    }
  };
});
