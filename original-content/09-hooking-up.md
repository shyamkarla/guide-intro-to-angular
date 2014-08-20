## Hooking up the Factory and Controller

We've got some basic email data inside a Factory setup, and a Controller, so let's connect the two:

````js
app.controller('InboxCtrl', function (InboxFactory) {
  // injected InboxFactory
  // I can call InboxFactory.getMessages();
  // here to obtain my email data
});
````
