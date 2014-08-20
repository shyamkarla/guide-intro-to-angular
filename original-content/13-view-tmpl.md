## View templating

After abstracting our Model into a Factory and creating a Directive, we need to actually declare it inside a template and let it be injected by our router when we hit the relevant URL.

In my example application, I've created `inbox.html` to hold the Inbox view template which looks like so:

````html
<div class="module inbox-view">
  <div class="module__title">
    <h1>
      {{ inbox.title }}
    </h1>
  </div>
  <inbox></inbox>
</div>
````

My `InboxCtrl` is very simple and only binds the `inbox.title` (this is where you'll see how `InboxCtrl as inbox` is relevant), all Controller methods or variables now correspond to `inbox`:

````js
app.controller('InboxCtrl',
  function InboxCtrl (InboxFactory) {

  'use strict';

  this.title = InboxFactory.title;

});
````

Inside the View template is my custom `<inbox></inbox>` element, which is my Directive which has a Controller that takes care of the rest of the functionality.