## Including The Angular JavaScript Files!

Angular comes as a single `.js` file that needs including at the bottom of the page. I'd advise putting it there rather than the `<head>` for better document rendering.  This needs to included before we can get any of the Angular goodies to work and see what they do.  So let's just do that!


For this app we're going to use `version 1.2.22` which at the moment of writing this is the most recent.  This is recommended for now as other third party plugins will have not been tested on the latest beta versions:

```html
<html>
    <head>
    </head>
    <body>
        <div></div>
        <script src="lib/jquery-v1.11.1.js"></script>
        <script src="lib/angular-v1.2.22.js"></script>
    </body>
</html>
```

###### Note: You can also instead use `v1.3.0-beta.7` of Angular, an unreleased latest version which I've been using recently is also very nice to feel free to try it out!

Notice I've also included the jQuery library as well. Angular has something called 'jQLite' built in, a jQuery-like micro-library that Angular packages internally. It's very light and doesn't have many of the great jQuery methods that might be needed, as well as any plugins we need that might depend on the full library. Angular uses the full jQuery library if it's loaded - so I've loaded it before Angular so it can detect it and use it instead.