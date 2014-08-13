## Including The Angular JavaScript Files!

Angular comes as a single `.js` file, as needs including at the bottom of the page. I'd advise putting it there rather than the `<head>` for better document rendering. Let's look at a more complete HTML setup, for this app we're going to use `v1.3.0-beta.7` of Angular, an unreleased latest version which I've been using recently:

````html
<html ng-app="app">
    <head>
    </head>
    <body>
        <div ng-view></div>
        <script src="lib/jquery-v1.11.1.js"></script>
        <script src="lib/angular-v1.3.0-beta.7.js"></script>
    </body>
</html>
````

Notice I've also included the jQuery library as well. Angular has something called 'jQLite' built in, a jQuery-like micro-library that Angular packages internally. It's very light and doesn't have many of the great jQuery methods that might be needed, as well as any plugins we need that might depend on the full library. Angular uses the full jQuery library if it's loaded - so I've loaded it before Angular so it can detect it and use it instead.