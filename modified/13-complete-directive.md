## Our Complete Inbox Directive

Here's what my finished Directive looked like when building this demo app:

```js
app.directive('inbox', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: "js/directives/inbox.tmpl.html",
        controllerAs: 'inbox',
        controller: function (InboxFactory) {
            this.messages = [];
            this.goToMessage = function (id) {
                InboxFactory.goToMessage(id);
            };
            this.deleteMessage = function (id, index) {
                InboxFactory.deleteMessage(id, index);
            };
            InboxFactory.getMessages()
                .then( angular.bind( this, function then() {
                    this.messages = InboxFactory.messages;
                }) );
        },
        link: function (scope, element, attrs, ctrl) {
            /* 
            by convention we do not $ prefix arguments to the link function
            this is to be explicit that they have a fixed order
            */
        }
    }
  });
```

Now we can use this directive anywhere in our application's scope by creating an `<inbox></inbox>` element (using `restrict: 'E'` to specify an element directive)!  The <inbox> element will then be replaced with the template at the `templateUrl`!  We then make an alias for the controller under the name `inbox`, this alias is then accessible inside the controller as `this` and inside the template as `inbox`. If you look inside the template you'll see expressions like `inbox.messages` and `inbox.deleteMessage(id, $index); these are the same `this.messages` and `this.deleteMessage` we can see in this controller function!

Finally we have a link function that we don't need in this directive but I've included it to show you that it will be ran straight after the controller is ran.  The link function will then receive the aliased controller as the fourth argument, here we named it `ctrl`.  Yes that's right, the link function has fixed positions for it's arguments i.e. scope is always first.  This is different behavior to the controller's arguments which are injected and therefore can take any order.  For the link function we don't use the $ prefix for scope, element and attributes to make it clear they aren't under the control of dependency injection.

Here's the complete HTML template (view) for the directive:

```html
<div class="inbox">
  <div class="inbox__count">
    You have {{ inbox.messages.length && inbox.messages.length || 'no' }} messages
  </div>
  <div ng-hide="!inbox.messages.length">
    <input type="text" class="inbox__search" 
      ng-model="inbox.search" 
      placeholder="Search by 'from', e.g. TicketMaster">
  </div>
  <ul class="inbox__list">
    <li ng-show="!inbox.messages.length">
      No messages! Try sending one to a friend.
    </li>
    <li ng-repeat="message in inbox.messages | filter:{ from: inbox.search }">
      <div class="inbox__list-info">
        <p class="inbox__list-from"> from: {{ message.from }} </p>
        <p class="inbox__list-date"> {{ message.date | date: 'dd/MM/yyyy' }} </p>
        <p class="inbox__list-subject"> {{ message.subject }} </p>
      </div>
      <div class="inbox__list-actions">
        <a href="#" ng-click="inbox.goToMessage(message.id);">
          Read
        </a>
        <a href="" ng-click="inbox.deleteMessage(id, $index);">
          Delete
        </a>
      </div>
    </li>
  </ul>
```

Notice the use of built-in angular directives such as `ng-hide`, `ng-show`, `ng-click`, `ng-repeat` and `ng-model`; we won't go into much detail about these directives as each can be quite a big topic but you can read about them here

LINK TO CONTENT ABOUT DIRECTIVES