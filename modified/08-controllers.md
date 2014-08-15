## Controllers

Controllers are the middleman between the Model and the View, they _drive_ the Model and View changes only, they do not hold application state or Model states. Remember this and your architecture will be solid.

Angular documentation examples show Model data being declared in the Controller, this is okay for examples, but the Controller then becomes the Model as well - which is very bad for many reasons:

* All the pieces start to get more coupled together
* More difficult to share business logic
* Makes things difficult to test

Let's look at what a Controller looks like. A good Controller will have as little logic in it as possible, and should only be used for two things.  Binding the Model to the View (initializing the View) and adding helper functions to the View.

```js
app.controller('InboxCtrl', function () {
    // Model and View bindings
    // Small helper function not needed anywhere else 
});
```

Each controller constructor function has access to a `$scope` injectable, this is the most documented way of adding properties and methods to our view.  Remember how we said each 'ng-controller' attribute specifies a scope of HTML to manage, well that scope has access to the same $scope as in the Controller function.

###### Note:  `$scope` isn't the only way, many people also use a combination of the "Controller As" configuration options along with the `this` keyword.  For the purpose of this article we will stick with `$scope` as it's been around Angular for much longer than 'Controller As'.

```js
app.controller('InboxCtrl', function ($scope) {
  // initialize the title property to an array for the view to use
  $scope.title = "This is a title";
});
```

And we can use this like so:

```html
<div ng-controller="InboxCtrl">
    {{ title }}
</div>
```

In order to keep our controllers more reusable, we would hook up data in our controller via a Factory or Service.