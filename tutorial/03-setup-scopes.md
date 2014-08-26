## Setup, Scopes and Directives

When learning a new framework it helps to have something working as soon as possible. This enables you to play around and dig into what does what. But, before we can get there, we need to talk about Angular scopes and our first two directives: `ng-app` and `ng-controller`.

One of the most fundamental parts of Angular is scopes. Scopes hold your Models (that's your data), they cooperate with your Controllers and they give the Views everything they need (that's what the user sees and interacts with). Angular scopes operate in a very similar way to the common programming language concept of scope.

The first scope we'll need is the application scope, this is exactly what you'd expect it to be: that's the scope your Angular application can operate in. We set this up in our HTML using the `ng-app` attribute.

```html
<html ng-app="myApp">
    <head></head>
    <body></body>
</html>
```

Notice how we gave our app a name of `'myApp'`. This will be usable in our whole html file.

###### Note: We can use ng-app without the "myApp" to declare a default app.  In other words, just `<html ng-app>`.

The second scope is `ng-controller`, this will determine where our controller can operate. We can have multiple controllers within our application. Each controller will have it's own scope. For example, we may have an `inbox.html` file, containing the below code. It will give responsibility to a controller named `'InboxCtrl'` (in our JavaScript) for this scope.

```html
<div ng-controller="InboxCtrl">
    <!-- inside InboxCtrl scope -->
</div>
```

Both, `ng-app` and `ng-controller`, are Angular directives. Think of Angular directive as something that allows you to extend your HTML. Here's a [more nerdy explanation](http://stackoverflow.com/a/13898058/1319206) in case you're interested.