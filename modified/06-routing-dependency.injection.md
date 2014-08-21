## Routing

The next logical step is to configure our routing, which controls which views are injected into the app based on which URL we're hitting. For example when we're at `/inbox`, we'll want to inject the `inbox.html` view and assign a Controller.  We can use the `$routeProvider` for this.

### RouteProvider

Since Angular 1.2.0, the `$routeProvider` hasn't been included in the main Angular build, so we'll need to include it as a separate module:

```html
<body>
    <!-- ... -->
    <!-- Extra routing library -->
    <script src="lib/angular-route-v1.2.22.js"></script>
</body>
```

###### Note: If you use the beta versions of angular, you must use the matching version of angular-route also.

This file will give us access to an additional module named `ngRoute`, which we need to include (set as a dependency) in our own module:

```js
var app = angular.module('app', [
  'ngRoute'
]);
```

### Config Stage

We saw before how to bind a Controller to the DOM, which is just one way of doing it. Angular allows you to dynamically assign a Controller through the `$routeProvider` service, which is much more flexible! From now on let's use this instead of using `ng-controller=""` to declare Controllers.

Angular modules each have a `.config()` function, we give this a callback that is ran before most other function callbacks in Angular.  This is where we must configure our SPA routing.

```js
app.config(function () { /*...*/ });
```

### Dependency Injection

We'll need to use the `$routeProvider` to setup our routes inside the config callback; this is made possible via some magic inside the Angular framework (using function definitions and regex).  We can simply accept `$routeProvider` as an argument to the config function and Angular will understand that we've asked for it.

```js
app.config(function ($routeProvider) {
    /* Now we can use the routeProvider! :D */
});
```
