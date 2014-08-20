## Promises ($q) &amp; Connecting Our Controller and Factory Together

Promises are very important inside Angular, as it's important be able to organize functions that take a long time to do things; e.g. a HTTP request!  And that's all they are, a way to organize and appropriately react to our methods that take a long time!  `$q` is quite a strange beast, you would create a `var deferred` object, returned from $q's `defer()` method and from there, you can access the promise property (object) of the deferred object by `deferred.promise`.

The promise object itself gives us the ability to ask (similar to an event handler):

"when this HTTP request or maybe another function that takes a long time to complete has finished"
"if it all goes well, please do the success function I give to .then()"
"if it goes wrong, please to the catch function I give to .then()"

```js
var d = $q.defer();
d.promise.then(
    function whenThingsGoSunny(){},
    function whenThingsDontDoGoSoSunny(){}
)
```

Promises have quite a few interesting behaviors that you can read about here:

NEED LINK TO HTTP AND SUCCESS

NEED LINK TO PROMISES INFORMATION

The object returned from using $http is similar to a promise, and $http()'s `.success()` function is similar to `then()`.  Although it only accepts one callback function and doesn't accept a callback for errors like the `then()` does.

### Hooking up the Factory and Controller

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

See how the factory is available as an injectable in our controller?  We then call the `getMessages` method on the factory and using the $http()'s `success` method ($http() was returned from `getMessages()`), we can then add the list of Emails/messages to our controller's `$scope` and use it in the view. i.e. The `success(fn)` is available from chaining when we do `http()` or `http.get()`, etc&hellip;