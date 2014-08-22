## Debugging

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

EXPLAIN THIS
```js
run(function($rootScope){
  $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
    console.log(event, current, previous, rejection)
  })
});
```