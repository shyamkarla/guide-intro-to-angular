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