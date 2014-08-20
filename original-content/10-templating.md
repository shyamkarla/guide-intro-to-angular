## Templating and Directives

Having the data is one thing, we need to push it to a template to actually get visibility of the data. Angular offers Directives as a way of encapsulating data, templates, and small modules that do one thing very well and can be reused.

Here's what a basic Directive structure might look like:

````js
app.directive('inbox', function inbox () {

  'use strict';

  return {
    restrict: 'EA',
    replace: true,
    scope: true,
    template: [],
    controllerAs: '',
    controller: function () {},
    link: function () {}
  };

});
````

As you can see, a Directive is made up of an Object with various properties on. These are some of the must commonly used properties, though check the documentation for others.

Directives are for creating custom logic for Angular, this can be anything such as template parts, or something to declare on an element to extend Angular's functionality.

We're going to use them like HTML5 Web Components, small encapsulated pieces of logic and templates. Difference is Angular Directives don't rely on HTML5 polyfilling and fit directly in with Angular's framework, allowing us to use future-like development methods now!

Let dig into Directives a little more.

Each Directive can have a Controller of it's own, which means we can inject Factories and bind encapsulated logic, this maximises reuse and makes things very simple to integrate and test.

Here's what my finished Directive looked like when building this demo app:

````js
/**
 * Directive: Inbox <inbox></inbox>
 */
app.directive('inbox', function inbox () {

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
          InboxFactory.messages = response;
          this.messages = InboxFactory.messages;
        }));
      }
    },
    link: function ($scope, $element, $attrs, $ctrl) {

    }
  };
});

````

You should've noticed in the template there are lots of handlebar template curly braces `{{ }}`. These are what Angular reads and interpolates data, this can be anything in JavaScript, an Object, String, Number, an Array.

I've got some handy comments at the top which tell me how to use my Directive, in this case as a custom element, Web Components style: `<inbox></inbox>`.

Earlier we looked at how we can inject a Factory into a Controller, I've done the exact same here. Instead of using the main Controller we looked at earlier, I can inject my Factory into the Directive's Controller to encapsulate the behaviour.

A quick run through of what some of the Directive properties mean:

* `restrict`: allows you to restrict how the element is declared, `E = Element`, `A = Attribute`, there are other ways of declaring (such as a comment) but I wouldn't recommend them as they're not that friendly with older browsers.
* `replace`: replaces the Directive's root element, in this case would be `<inbox></inbox>`
* `scope`: tells Angular to use an isolated or inherited scope, these concepts are quite tricky to grasp, but setting to `true` inherits the parent scope which makes things easier to work with. There are cases where isolated scopes are the better choice depending on what we're doing
* `template`: I've recently used an `[].join('')` style for templating, it's much cleaner to work with and we can start the first line of the template on a new line, rather than having a huge indent
* `templateUrl`: the same as `template`, but will point to a template file such as `tmpl/inbox-directive.html` instead of being a string
* `controllerAs`: creates a namespace for our Controller when instantiated
* `controller`: inject dependencies and bind logic
* `link`: a place to write non-Angular logic, but tie it in with Angular. You'll have access to the current scope, the template element root (first element in template rather than Directive root), the attributes on the element declared, and when you create a `controller: function () {}` in the Directive, this becomes the fourth argument, I've called this one `$ctrl` and you'll have access to Controller methods and variables