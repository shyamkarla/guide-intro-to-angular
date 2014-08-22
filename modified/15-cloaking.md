## Cloaking

Angular has a really neat built-in feature called cloaking, which you can declare on an Element to tell Angular it needs cloaking whilst rendering. This will hide any handlebars you might see flicker before Angular has rendered and loaded data.

When `lib/angular.js` has loaded, it appends an inline `<style></style>` element with cloaking styles to hide elements during load. This can sometimes take a second to load as it's got a JavaScript dependency too, so I recommend setting up the `<head></head>` of your document like this:

```html
<!doctype html>
<html ng-app="app">
  <head>
    <style>
    [ng\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {
      display: none !important;
    }
    </style>
  </head>
  <body>
  </body>
</html>
```

This is 100% reliable and hides any cloaked elements immediately, even without Angular loaded. Applying cloaked styles is easy:

```html
<div ng-cloak>
  {{ someData }}
</div>
```