## Prerequisites

1. Understand how to build a JavaScript application with jQuery
2. Have some local server setup such as http-server, python SimpleHTTPServer, php -S, XAMPP, etc...
3. Be able to clone a github repo and change branches!

### Not Covered

a list of things not spoke about in the article

- Talk through of the code in factories
- Talk about services as an alternative to factories
- Run function
- Custom filters
- Transclusion
- Animation
- resolve blocks
- watch statements
- angular's helpers like $window, $timeout
- events
- ngSanitize
- Unit testing
- E2E testing

#### further readings

Some further readings; some should be strategically placed in the content as well as relisted at the end :)

Scope - http://jonathancreamer.com/adding-clarity-to-scope-inheritance-in-angular/
Debugging - http://ionicframework.com/blog/angularjs-console/

*Extras*:
Style Guides - https://github.com/mgechev/angularjs-style-guide
and https://github.com/johnpapa/angularjs-styleguide

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
## Concerns in the App Source Code

### directives
- make a module_title directive for string templates
- move the GIANT string templates into view files
- shows both techniques

### other
- avoid the use of a global called 'app', easy to break it/ show potential inside an IIFE.
- look for a place the filter can be used to do something
- tidied up some indentation on chains for readability
- the service is pointless
- why is routeParams inside the factories??
- why are there blocking alerts??
- remove dollar sign on link functions too.
- use of setTimeout instead of $timeout bad for testing etc...
- some problems with tight coupling between directive calling parent scope to change the title, HMM
- changed directives to only restrict 'E'


### server command assumes unix environment (something with python installed)
- not everyone will have a server to use for this! http-server maybe but even then!
- can't use file:// 


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

#### Worth adding
- another directive for the views that abstracts out the title section

### Extras

- built-in directives tutorials
- minification of angular projects information
- deeper into directives content talking about communication between directives, linking functions, compile functions, all the other stuff like that

