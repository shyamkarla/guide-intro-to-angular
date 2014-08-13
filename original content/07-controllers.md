## Controllers

Controllers are the middleman between the Model and the View, they _drive_ the Model and View changes only, they do not hold application state or Model states. Remember this and your architecture will be solid.

Angular documentation examples show Model data being declared in the Controller, this is okay for examples, but the Controller then becomes the Model as well - which is very bad for many reasons:

* The Controller becomes the Model
* The Controller becomes in charge of application state
* Code isn't reusable in other Controllers
* Makes things difficult to test

Let's look at what a Controller looks like. A good Controller will have as little logic in it as possible, and should only be used for binding the Model to the View, acting as the middle man again.

````js
app.controller('InboxCtrl', function () {
    // Model and View bindings
});
````

When using the "Controller as" syntax, we declare properties inside the Controller using `this`:

````js
app.controller('InboxCtrl', function () {
  this.emails; // just an undefined variable, no data bound
});
````

We need to hook up data into our Controller, this will be done via a Factory or Service.