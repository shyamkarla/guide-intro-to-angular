## Thinking Angular

When moving from something like website development to Angular, you can be very tempted to use jQuery selectors, DOM methods. You don't need to do that at all! Angular takes care of the DOM. Do not modify it yourself, unless you _really_ need to or are using a plugin. Anything you'll likely want to do, Angular can do.

Getting the value of a textarea? You might be tempted to do this:

````html
<textarea></textarea>
<script>
var elem = document.querySelector('textarea');
var value = elem.value;
</script>
````

With Angular, the `ng-model` will keep this updated for us, we just reference it:

````html
<textarea ng-model="myModel"></textarea>
<script>
angular.module('app')
.controller('SomeCtrl', function () {
  // binds and keeps the value updated at all times
  // no need to requery the value at any time
  // which means we can pass the value straight
  // back to the server for example
  this.myModel = '';
})
</script>
````