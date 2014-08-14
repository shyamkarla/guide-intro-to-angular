## Routing

The next logical step is to configure our routing, which controls which views are injected into the app based on which URL we're hitting. For example when we're at `/inbox`, we'll want to inject the `inbox.html` view and assign a Controller.

### Config Stage

We saw before how to bind a Controller to the DOM, which is just one way of doing it. Angular allows you to dynamically assign a Controller through the `$routeProvider` service, which is much more flexible! From now on let's use this instead of using `ng-controller=""` to declare Controllers.

Angular modules each have a `.config()` function, we give this a callback that is ran before most other function callbacks in Angular.  This is where we must configure our SPA routing.

### Dependency Injection

We'll need to use the `$routeProvider` to setup our routes inside the config callback; this is made possible via some magic inside the Angular framework (using function definitions and regex).  We can simply accept `$routeProvider` as an argument to the function and Angular will understand that we've asked for it.

### RouteProvider

Since Angular 1.2.0, the `$routeProvider` hasn't been included in the main Angular build, so we'll need to include it as a separate module:

```html
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
```

This file will give us access to an additional module named `ngRoute`, which need to include (set as a dependency) in our own module:

```js
var app = angular.module('app', [
  'ngRoute'
]);
```
