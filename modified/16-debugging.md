## Debugging

#### Stack Trace Function Names

Angular uses a lot of anonymous functions in the call stack. When these throw an error, and believe me you'll see a lot of them during development, to make things easier to debug I've named anonymous functions.

Here's before:

```js
app.factory('InboxFactory',
  function ($q, $http) {}
):
```

...and after:

```js
app.factory('InboxFactory',
  function InboxFactory ($q, $http) { }
):
```

This will then show errors `at InboxFactory` rather than `at anonymous`. A handy tip for developing Angular apps.

#### Routing Problems

Another debugging tip when working with routes is to listen for Routing Events to be triggered on the `$rootScope`.  A suitable place for this is the `run` function which can be thought of as a 'controller for the module', but we try to keep this section as small as possible.

```js
app.run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
```

Above is an example of how you would setup an event listener for any errors that occur during a route change.

#### Debugging Scopes

Another good article which goes into good detail regarding scope debugging is available [here](http://ionicframework.com/blog/angularjs-console/)