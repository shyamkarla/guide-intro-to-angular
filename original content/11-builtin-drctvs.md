## Built-in Directives

Angular ships with some really useful Directives, such as `ng-show`, `ng-repeat` and `ng-click`. There are many built-in Directives, and more get added each release to help enhance how we build our apps.

Our Directives will evaluate based on data. For example `ng-show="someData"` will evaluate when the value is `true`. If the value is false it will hide the element.

One of the most powerful Angular Directives is `ng-repeat`, which iterates over Objects (or items) in an Array:

````html
<ul>
  <li ng-repeat="item in items">
    {{ item.name }}
  </li>
</ul>
````