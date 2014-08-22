## Prerequisites

1. Understand how to build a JavaScript application with jQuery
2. Have some local server setup such as http-server, python SimpleHTTPServer, php -S, XAMPP, etc...
3. Be able to clone a github repo and change branches!

#### Glossary:

Terms to explain this repo.

Article - MD file to be converted to HTML

Section - part of the article

App - The working project (source files)

Stage - Point in the apps growth including source files

_____
## App Download/Branch Points

Inside the revised app folder there are a number of folders each showing the project at a working stage growing from 01 to final-section.

Here is a list of the sections of the article that are appropriate for each of these stages of the project

#### 01-include-angular
- Section 2 including angular

#### 02-first-controller
- Section 8 Controllers

Considering the ngView importance in this app, to get a first controller setup we need to explain sections 2 to 8 (mvc, scopes, ngView, module, routing, config) for the next pieces to work!

#### 03-inbox-factory
- Section 9 Promises

Promises are a massive part of this application so they are used to explain the controller that uses the factory in section 8.

#### 04-first-directive
- Section 13 the complete directive

#### Final-section

- The complete app to be viewed in section 17-complete-project which lists the changes at this point

_____
## Changes in the App Source Code

- removed the app global
- look for places to add custom filters
- tidied up some indentation for consistency
- removed the service that did nothing and wasn't explained at all
- removed comments that just say the name of the variable on the next line o_O
- removed the dollar sign from arguments to link functions
- changed setTimeout to $timeout
- changed directives to restrict 'E' as they don't make sense as attributes at all

#### problems still in application
- horrible coupling in the Email directive to the Email controller's message
- why is the title being set in the controller?  Can just be in the view
- controller might want some information, the directives seem to have FAR too many concerns!
- should be smaller directives doing simple things and reusable, not both making http requests to json files as well as changing loading messages and owning the navigation methods as well as manipulating the data omg too much ahh!
- routeParams in the factories and directives feels odd, easily could add resolve for this

### TODO
- server command assumes unix environment (something with python installed)
- not everyone will have a server to use for this! http-server maybe but even then!
- can't use file://, need intro section to explain the repo approach we use

----
## Changes To Sections

02 - data-binding * removed

// moved the inclusion of angular to earlier so each step will keep working

03 - setup * split into scopes and ngview

04 - dependencies * renamed to 'including angular'

* using stable version : it's what's supported by testing frameworks / component libraries / etc.

05 - Module * removed global app variable suggestion

06 - routing * added dependency injection / config / route provider subsections

07 - controllers * removed controllerAs to make things simpler
http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers

* added it back in at final project branch to show when complete (get a feel for both)
* didn't explain benefits of both as article is quite long already

08 - factory * removed persistence

* Adding a new section for promises

09 - hooking up the factory

* Explained \Where did InboxFactory come from?\
* tiny section is now just a sub section for factories
* Moved the view information 'title' _out_ of the file that does the $http.... WOW, now exists in the controller, where it kinda should :S Infact it could basically exist in the view only... REALLY. left it in the controller as example of binding (it's needed for the Email Controller to update from "loading" job)
    *  Include bad practice on purpose for the sake of introducing directives

10 - templating and directives - split into two

* moved section 13 to here too, view templating (it's like the first thing you do in Angular tutorial)
* Tidied up the factory a little bit, no longer setting messages of Inbox factory inside the directive (lol) just invoking the factory method <face-palm> why make this coupling??

11 - builtin directives

* talking more about the directive we created

12 - expressions - removed: this has been covered repeatedly throughout the content now

13 - view-tmpl - removed: also covered repeatedly (section 10)

14 - di - removed: also covered repeatedly

* This also had some content about minification of angular so use arrays of dependencies... seems like it's outside the scope of this guide as we don't minify anything... might be worth including an extras section at the end

15 - cloaking * no changes (typo fix)

16 - debugging

* added a little bit of content on routing error events

17 - 
* added a new section for 'complete project' talking about what final changes were made.

17 - thinking angular - no changes

18 - download - removed: we're changing the way this works

19 - TODO
- final section on the _stuff_

#### Problems
- section 10... lots of advance view logic using ng-model, ng-hide, ng-show, ng-repeat, ng-click it's not explained in much detail

#### Worth adding to code
- another directive for the views that abstracts out the title section
- another controller in the index for the header section
- better dependency management between the controller and the directives (not fudging the controller variables in the directive)
- something about services
- abstract the models better into services
- use an app global on one file but place inside an IIFE
- add some custom filters somehow?


