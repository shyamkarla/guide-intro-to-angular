## Setup

I find once you've got a new library/framework setup for you, learning it and digging into how it works is a thousand times easier - so we'll start there. There are a few things you need to know about Angular before getting started; and that's the basics for the setup. I call these the bare essentials:

* ng-app attribute and corresponding angular.module() name
* ng-controller assignment and corresponding .controller() name
* ng-view attribute and .config() setup for basic routing

Let's explore the above and see what these look like.

````html
<html ng-app="app">
    <head>
    </head>
    <body>
        <div ng-view></div>
    </body>
</html>
````

We've declared the `ng-app` attribute, which tells Angular where our application module scope is, and declared the `ng-view` attribute to tell Angular where our views will be injected into when we "change page". Angular encourages the "single page application" methodology, which means we never get a full page refresh, all "pages" are injected content via XHR (Ajax). Of course these aren't "pages" as such, they're "views" - which we get a new view depending on the application state.

Inside our view, we need to assign the `ng-controller` attribute to a view template, which will be injected as a "view".

````html
<div ng-controller="InboxCtrl">
    <!-- inside InboxCtrl scope -->
</div>
````

Angular scopes (in places) work very like JavaScript scope, everything you know about JavaScript scopes you can apply most of it to the DOM. Angular takes many programming language concepts and applies them to HTML, making it an extremely dynamic and powerful framework. This means that anything outside of the `ng-controller` element, is "out of scope", protecting our data, methods and anything else.

Let's assume we have an `inbox.html` file, which we'd like to contain our emails in our inbox for our application. We'll need to move our email template into it's own view.

````html
<div ng-controller="InboxCtrl">
    <!-- placeholder for my inbox -->
</div>
````

This is our first step of abstraction, it's important to remember in Angular that you'll want to abstract as much as you can, think templates, logic, layers.

Let's stop here, we've got a basic idea of the setup, and the right declarations, we just need to include Angular's JavaScript files, and finally get something going.