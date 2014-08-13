## Routing

The next logical step is to configure our routing, which controls which views are injected into the app based on which URL we're hitting. For example when we're at `/inbox`, we'll want to inject the `inbox.html` view and assign a Controller.

We saw before how to bind a Controller to the DOM, which is just one way of doing it. Angular allows you to dynamically assign a Controller through the `$routeProvider` service, which is much more flexible! From now on let's use this instead of using `ng-controller=""` to declare Controllers.

Angular modules each have a `.config()` module, we'll need to pass in `$routeProvider` to setup our routes.

Since Angular 1.2.0, the `$routeProvider` hasn't been included in the main Angular build, so we'll need to include it as a separate module:

````html
<html ng-app="app">
    <head>
    </head>
    <body>
        <div ng-view></div>
        <script src="lib/jquery-v1.11.1.js"></script>
        <script src="lib/angular-v1.3.0-beta.7.js"></script>
        <script src="lib/angular-v1.3.0-route-beta.7.js"></script>
    </body>
</html>
````

Angular namespaces this additional module as `ngRoute`, which need to include in our own module:

````js
var app = angular.module('app', [
  'ngRoute'
]);
````

We can then setup our `.config()` module with the `$routeProvider`:

````js
app.config(function ($routeProvider) {

  'use strict';

  $routeProvider
  .when('/', {
    templateUrl: 'views/inbox.html'
  })
  .otherwise({
    redirectTo: '/'
  });

});
````

The `$routeProvider` is really declarative and easy to use, we just declare what view template to use when the URL is pointing to a particular path.

Our app will have an inbox view, and a single view for injecting the clicked on email into.

The first view will be injected at `/inbox`, and the second will be `inbox/email/:id`. You'll notice the second route has `:id` at the end - this is a dynamic view. It means that an Object with an `id` as a property (with a value) will be used in the URL, which makes all views dynamic. We'll then use this to make a server call to get the email that corresponds with the `id`.

````js
app.config(function ($routeProvider) {

  'use strict';

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
````

If you look closely, I've told each view to have a particular Controller. Later versions of Angular (we're using one of the latest) ship with a new Controller syntax, the "Controller as" syntax, which instantiates the Controller like an Object and binds it to the current scope under a namespace. The namespace I've chosen for `InboxCtrl` is `inbox`. We can also declare this inline as `ng-controller="InboxCtrl as inbox"`.

This syntax is better for various reasons, but we'll come onto those next.