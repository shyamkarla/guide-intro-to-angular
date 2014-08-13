## Expressions

Expressions tie in very closely with Directives, and can create very dynamic and responsive templates.

````html
<p>
  You have {{ items.length && items.length || 'no' }} items
</p>
````

Instead of writing logic that replaces the text of the above template when data changes, Angular will change the text based on the `items.length` Array. If it's empty we'll see `You have no items`, if there are items in the Array we'll see the number of items, such as `You have 2 items`.