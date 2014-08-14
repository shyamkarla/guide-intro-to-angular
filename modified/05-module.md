## Module(s)
Every app needs a module, and Angular provides us with a namespacing capability for this using `angular.module()`. The method sets and gets. To create (set) a new module we do this:

```js
angular.module('app', []);
```

Notice the empty array, this indicates we are setting and specifies any other modules as dependencies inside that array.

To get a reference to a module, for including controllers, factories etc, we drop the array and just call the module by name:

```js
angular.module('app');
```

###### Note: When we specified the `ng-app="app"`, the `"app"` part will be the same as one of the `angular.module("app", [])` names we created.

The `angular.module()` method also returns a reference to the module which can make accessing it a little less verbose, however this pattern is discouraged due to global management:

```js
var app = angular.module('app', []);
```