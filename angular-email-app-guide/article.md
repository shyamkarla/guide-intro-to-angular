# Thinkful AngularJS [thinkful to provide title]

[intro content from Thinkful]

[download links, top and bottom of article]

We're going to walk through building a simple AngularJS application, whilst covering some of the main concepts in modern development and the Angular framework. The application will be a very simple email app, purely for example with some common Angular and application components. It'll allow you to see some emails, read or delete them.

The app and this article will cover things such as single page applications, client-side MVC patterns, two way data-binding, main Angular building blocks  such as Directives, Factories and Controllers.

## Client-side MVC

Let's start with a concept which Angular have applied to their framework; client-side MVC. Broken down these things are easier to digest:

* Model: Our data, data logic, such as server comms (JavaScript driven)
* View: Rendered output of templates, Directives, HTML
* Controller: The middleman binding between Model and View, drives Model and View changes

## Two way data-binding

Two way data-binding is easy to understand. You have a Model, and it's bound to the View. A user of an application will make changes to the View, in turn Angular keeps the Model bound to this View synchronised.

Any data updated from the server that updates the Model is also instantly reflected in the View, this is fantastic for keeping querying down, code cleaner and not having to manually maintain Model states, we can just reference a Model and push it to the server for example.

## Setup

I find once you've got a new library/framework setup for you, learning it and digging into how it works is a thousand times easier - so we'll start there. There are a few things you need to know about Angular before getting started; and that's the basics for the setup. I call these the bare essentials:

* ng-app attribute and corresponding angular.module() name
* ng-controller assignment and corresponding .controller() name
* ng-view attribute and .config() setup for basic routing

Let's explore the above and see what these look like.

````html
<html ng-app="app">
    <head>
    </head>
    <body>
        <div ng-view></div>
    </body>
</html>
````

We've declared the `ng-app` attribute, which tells Angular where our application module scope is, and declared the `ng-view` attribute to tell Angular where our views will be injected into when we "change page". Angular encourages the "single page application" methodology, which means we never get a full page refresh, all "pages" are injected content via XHR (Ajax). Of course these aren't "pages" as such, they're "views" - which we get a new view depending on the application state.

Inside our view, we need to assign the `ng-controller` attribute to a view template, which will be injected as a "view".

````html
<div ng-controller="InboxCtrl">
    <!-- inside InboxCtrl scope -->
</div>
````

Angular scopes (in places) work very like JavaScript scope, everything you know about JavaScript scopes you can apply most of it to the DOM. Angular takes many programming language concepts and applies them to HTML, making it an extremely dynamic and powerful framework. This means that anything outside of the `ng-controller` element, is "out of scope", protecting our data, methods and anything else.

Let's assume we have an `inbox.html` file, which we'd like to contain our emails in our inbox for our application. We'll need to move our email template into it's own view.

````html
<div ng-controller="InboxCtrl">
    <!-- placeholder for my inbox -->
</div>
````

This is our first step of abstraction, it's important to remember in Angular that you'll want to abstract as much as you can, think templates, logic, layers.

Let's stop here, we've got a basic idea of the setup, and the right declarations, we just need to include Angular's JavaScript files, and finally get something going.

## JavaScript dependencies
Angular comes as a single `.js` file, as needs including at the bottom of the page. I'd advise putting it there rather than the `<head>` for better document rendering. Let's look at a more complete HTML setup, for this app we're going to use `v1.3.0-beta.7` of Angular, an unreleased latest version which I've been using recently:

````html
<html ng-app="app">
    <head>
    </head>
    <body>
        <div ng-view></div>
        <script src="lib/jquery-v1.11.1.js"></script>
        <script src="lib/angular-v1.3.0-beta.7.js"></script>
    </body>
</html>
````

Notice I've also included the jQuery library as well. Angular has something called 'jQLite' built in, a jQuery-like micro-library that Angular packages internally. It's very light and doesn't have many of the great jQuery methods that might be needed, as well as any plugins we need that might depend on the full library. Angular uses the full jQuery library if it's loaded - so I've loaded it before Angular so it can detect it and use it instead.

## Module
Every app needs a module, and Angular provides us with a namespacing capability for this using `angular.module()`. The method sets and gets. To create (set) a new module we do this:

````js
angular.module('app', []);
````

Notice the empty array, this includes any other modules as dependencies.

To get a reference to a module, for including controllers, factories etc, we drop the array and just call the namespace:

````js
angular.module('app');
````

We can then bolt further methods into the module.

Note: the module name you create needs to match the HTML `ng-app` attribute so Angular knows where your app is.

We might want to keep a reference to our module via a variable, this can make access it easier across files as it's namespaced:

````js
var app = angular.module('app', []);
````

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

## Controllers

Controllers are the middleman between the Model and the View, they _drive_ the Model and View changes only, they do not hold application state or Model states. Remember this and your architecture will be solid.

Angular documentation examples show Model data being declared in the Controller, this is okay for examples, but the Controller then becomes the Model as well - which is very bad for many reasons:

* The Controller becomes the Model
* The Controller becomes in charge of application state
* Code isn't reusable in other Controllers
* Makes things difficult to test

Let's look at what a Controller looks like. A good Controller will have as little logic in it as possible, and should only be used for binding the Model to the View, acting as the middle man again.

````js
app.controller('InboxCtrl', function () {
    // Model and View bindings
});
````

When using the "Controller as" syntax, we declare properties inside the Controller using `this`:

````js
app.controller('InboxCtrl', function () {
  this.emails; // just an undefined variable, no data bound
});
````

We need to hook up data into our Controller, this will be done via a Factory or Service.

## Factory

Angular Factories should be used to abstract our Model, server-comms and persisting states and changes. Think of them as a provider for a Model, whether it's some static data, JSON data from the server via XHR, or data changes - all should take place inside the Factory.

````js
app.factory('InboxFactory',
  function InboxFactory ($q, $http, $location) {

  'use strict';

  var exports = {};

  return exports;

});
````

Inside my Factories, I like to create an `exports` Object, and return it. It helps with internal naming and I can see which methods/variables are private or not.

In this app, we'll need to get our messages, so let's create a function to do that. Angular uses a jQuery-like ajax Object called `$http` to communicate with the server:

````js
app.factory('InboxFactory',
  function InboxFactory ($q, $http) {

  'use strict';

  var exports = {};

  exports.getMessages = function () {
    var deferred = $q.defer();
    $http.get('json/emails.json')
    .success(function (data) {
      deferred.resolve(data);
    })
    .error(function (data) {
      deferred.reject(data);
    });
    return deferred.promise;
  };

  return exports;

});
````

I've also included `$q` to resolve our promises, which resolve and return data a little different than `$http` does.

I've created a JSON file called `emails.json`, which in production would be an endpoint.

## Hooking up the Factory and Controller

We've got some basic email data inside a Factory setup, and a Controller, so let's connect the two:

````js
app.controller('InboxCtrl', function (InboxFactory) {
  // injected InboxFactory
  // I can call InboxFactory.getMessages();
  // here to obtain my email data
});
````

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

## Built-in Directives

Angular ships with some really useful Directives, such as `ng-show`, `ng-repeat` and `ng-click`. There are many built-in Directives, and more get added each release to help enhance how we build our apps.

Our Directives will evaluate based on data. For example `ng-show="someData"` will evaluate when the value is `true`. If the value is false it will hide the element.

One of the most powerful Angular Directives is `ng-repeat`, which iterates over Objects (or items) in an Array:

````html
<ul>
  <li ng-repeat="item in items">
    {{ item.name }}
  </li>
</ul>
````

## Expressions

Expressions tie in very closely with Directives, and can create very dynamic and responsive templates.

````html
<p>
  You have {{ items.length && items.length || 'no' }} items
</p>
````

Instead of writing logic that replaces the text of the above template when data changes, Angular will change the text based on the `items.length` Array. If it's empty we'll see `You have no items`, if there are items in the Array we'll see the number of items, such as `You have 2 items`.

## View templating

After abstracting our Model into a Factory and creating a Directive, we need to actually declare it inside a template and let it be injected by our router when we hit the relevant URL.

In my example application, I've created `inbox.html` to hold the Inbox view template which looks like so:

````html
<div class="module inbox-view">
  <div class="module__title">
    <h1>
      {{ inbox.title }}
    </h1>
  </div>
  <inbox></inbox>
</div>
````

My `InboxCtrl` is very simple and only binds the `inbox.title` (this is where you'll see how `InboxCtrl as inbox` is relevant), all Controller methods or variables now correspond to `inbox`:

````js
app.controller('InboxCtrl',
  function InboxCtrl (InboxFactory) {

  'use strict';

  this.title = InboxFactory.title;

});
````

Inside the View template is my custom `<inbox></inbox>` element, which is my Directive which has a Controller that takes care of the rest of the functionality.

## Dependency Injection (DI)

Throughout the project, you've seen Object references getting passed into functions as arguments, for example:

````js
app.factory('InboxFactory',
  function InboxFactory ($q, $http) {

}):
````

Here, `$q` and `$http` are injected. Without declaring them, any `$http` references would be undefined as they need to be injected to work.

With minification, Angular will break because a minifier will mangle dependency injected names, for example, this:

````js
app.factory('InboxFactory',
  function InboxFactory ($q, $http) {

}):
````

May become this when minified:

````js
app.factory('InboxFactory',
  function InboxFactory (a, b) {
  // a and b mean nothing to Angular!
}):
````

We get around this by specifying dependencies within an outer Array:

````js
app.factory('InboxFactory',
  ['$q', '$http', function InboxFactory ($q, $http) {

}]):
````

The order in which they're specified correlates to how they're passed in as arguments.

This can be a lot of painful work when working with Angular, as we have to repeat dependencies a lot. I'd highly recommend `ng-min`, a task for Grunt/Gulp which automatically adds this Array of dependencies when running the build, which takes the whole task off our hands!

## Cloaking

Angular has a really neat built-in feature called cloaking, which you can declare on an Element to tell Angular it needs cloaking whilst rendering. This will hide any handlebars you might see flicker before Angular has rendered and loaded data.

When `lib/angular.js` has loaded, it appends an inline `<style></style>` element with cloaking styles to hide elements during load. This can somethings take a second to load as it's got a JavaScript dependency too, so I recommend setting up the `<head></head>` of your document like this:

````html
<!doctype html>
<html ng-app="app">
  <head>
    <style>
    [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
      display: none !important;
    }
    </style>
  </head>
  <body>
  </body>
</html>
````

This is 100% reliable and hides any cloaked elements immediately, even without Angular loaded. Applying cloaked styles is easy:

````html
<div ng-cloak>
  {{ someData }}
</div>
````

## Debugging

Angular uses a lot of anonymous functions in the call stack. When these throw an error, and believe me you'll see a lot of them during development, to make things easier to debug I've named anonymous functions.

Here's before:

````js
app.factory('InboxFactory',
  function ($q, $http) {

}):
````

...and after:

````js
app.factory('InboxFactory',
  function InboxFactory ($q, $http) {

}):
````

This will then show errors `at InboxFactory` rather than `at anonymous`. A handy tip for developing Angular apps.

## Thinking Angular

When moving from something like website development to Angular, you can be very tempted to use jQuery selectors, DOM methods. You don't need to do that at all! Angular takes care of the DOM. Do not modify it yourself, unless you _really_ need to or are using a plugin. Anything you'll likely want to do, Angular can do.

Getting the value of a textarea? You might be tempted to do this:

````html
<textarea></textarea>
<script>
var elem = document.querySelector('textarea');
var value = elem.value;
</script>
````

With Angular, the `ng-model` will keep this updated for us, we just reference it:

````html
<textarea ng-model="myModel"></textarea>
<script>
angular.module('app')
.controller('SomeCtrl', function () {
  // binds and keeps the value updated at all times
  // no need to requery the value at any time
  // which means we can pass the value straight
  // back to the server for example
  this.myModel = '';
})
</script>
````

## Downloading and running the application

You can download all the source files from this example application, it demonstrates all the key features we've gone through in this article.

There is one thing to note when running the application, since it's localhost you'll need to spin up a local server. This is super easy on a Mac, and I've also included `server.command` file which when double-clicked/ran will server your content on `localhost:8080`.
