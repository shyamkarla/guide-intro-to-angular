## Setup &amp; Scope

I find that when learning a new framework, it's helps to have something working as soon as possible, so you can start playing around and digging into what does what!

So, when setting up your Angular application, the first thing you will need to do is tell it where to go! But before we do this, we should have a chat about scopes and our first two directives: `ng-app` and `ng-controller`.

### Scopes

One of the most fundamental parts of Angular, is it's scopes.  They hold your Models, they cooperate with your Controllers and they give the Views everything they need!  They operate in a very similar way to the common programming language concept of scope.

The first scope we will need is the application scope, this is exactly what it says on the tin: the scope that your Angular application can operate in. We set this up in our HTML using the `ng-app` attribute. Here we have said that our app (module) with a name of `'app'` will be usable in our whole html file.

```html
<html ng-app="app">
    <head></head>
    <body></body>
</html>
```

The second scope is `ng-controller`, this will determine where our controller can operate!  We can have multiple controller scopes within our application.  For example we may have an `inbox.html` file, containing the below code. It will give responsibility to a controller named `'InboxCtrl'` for this scope.

```html
<div ng-controller="InboxCtrl">
    <!-- inside InboxCtrl scope -->
</div>
```
