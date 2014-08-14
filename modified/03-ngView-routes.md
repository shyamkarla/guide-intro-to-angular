## ngView &amp; Routes

Another important building block that can connect certain URLs of our application to scopes is the `ng-view` directive.

```html
<html ng-app="app">
    <head>
    </head>
    <body>
        <div ng-view></div>
    </body>
</html>
```

The `ng-view` attribute here will tell Angular where we wish to inject route based views into our application!  One such view could be the said inbox.html file tied to it's `InboxCtrl`.  When we 'change page', this inbox view would then be replaced inside the `ng-view`, block according to our routing setup.

Angular encourages the "single page application" methodology, which means we never get a full page refresh, all "pages" are injected content via XHR (Ajax). Of course these aren't "pages" as such, they're "views" - which we get a new view depending on the application state.