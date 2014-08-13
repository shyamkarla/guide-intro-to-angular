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