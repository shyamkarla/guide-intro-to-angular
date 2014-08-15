## What's a Factory?

Angular Factories can be used for all kinds of situations; some of the most common use-cases are server-comms via HTTP and abstracting Models to persist application state and changes. They're a great way to create reusable features and code blocks throughout our application.

In other words, if you want to communicate with a RESTful API, do it through a factory!  If you want to store a 'CurrentUser' with authentication information, do it in a factory!

###### Note:  You may have heard of factories as a design pattern but Angular factories are different.

You can create a factory using the `angular.factory()` method like so:

```js
app.factory('ExampleFactory', function ExampleFactory($rootScope, $http, $location) {
  return myReusableFunction(){
    // do something fancy
  };
});
```

Inside my Factories, I like to create an `exports` Object, and return it. It helps with explicit internal naming and I can see which methods/variables are private or not through closures.

In this app, we'll need to get our messages, so let's create a function to do that. Angular uses the `$http` service to communicate with the server, so we'll inject it:

```js
app.factory('InboxFactory', function InboxFactory ($http) {
  var exports = {};

  exports.getMessages = function () {
    return $http.get('json/emails.json')
        .error(function (data) {
          console.log('There was an error!', data);
        });
  };

  return exports;
});
```

## $http

This will use $http to make a GET request to our "json/emails.json" file; here we also set a default error through chaining onto the $http promise.  Yes that's right, `$http()` returns a promise, so we can use all of the Angular promise API the same as $q object with a few extras: namely `error(fn)` and `success(fn)`.  `success(fn)` and `error(fn)` are two "sugar" methods that are very similar to `then(fn)` and `catch(fn)` but specific to `$http`.

## Promises and $q

NEED LINK TO HTTP AND SUCCESS

NEED LINK TO PROMISES INFORMATION

## Hooking up the Factory and Controller

We've got some basic email data inside a Factory setup, and a Controller, so let's connect the two:

```js
app.controller('InboxCtrl', function ($scope, InboxFactory) {
  InboxFactory.getMessages()
    .success(function(jsonData, statusCode){
      console.log('The request was successful!', statusCode, jsonData);
      // Now add the Email messages to the controller's scope
      $scope.emails = jsonData;
    });
});
```

See how the factory is available as an injectable in our controller?  We then call the `getMessages` method on the factory and using the `$http` promise's `success` method, we can add the list of Emails/messages to our controller's `$scope` and use it in the view.