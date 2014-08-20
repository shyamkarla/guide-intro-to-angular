## Large Sections Need Splitting Up
* 03-setup
* 06-routing
* 08-factory
* 11-templating - very big
* 13-view templating
* 14-DI

----

## Concerns in the App

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

----
#### further readings:
Scope - http://jonathancreamer.com/adding-clarity-to-scope-inheritance-in-angular/?utm_source=javascriptweekly&utm_medium=email
----

## Concerns in the Sections

01 - intro

02 - data-binding * removed

03 - setup * split into scopes and ngview


04 - DEPS * renamed to including angular

* should we be using the angular beta version?? better to use stable maybe? / it's what's supported by testing frameworks / component libraries / etc.
* don't necessarily need jQuery for this application either. worth talking about but adds nothing to project.

05 - Module * remove global suggestion

discouraged here https://github.com/mgechev/angularjs-style-guide
and here https://github.com/johnpapa/angularjs-styleguide

06 - routing * added dependency injection / config / route provider subsections

07 - controllers * removed controllerAs to make things simpler
http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
    
* it's a heated topic in my opinion... worth showing benefits of both instead of being so dogmatic
    * 'this' is good for exposing API methods to other directives
    * don't want everything exposed though, scope is good for private
    * scope is also where $apply/$watch/forms/etc.. live
    * so many ways to guide this inter-scope-communication such as: 
        * 'require' and ctrl in directive ('this' only)
        * 'scope: { '&@=' }, in directive (both)
        * call on parent $scope directly in views of nested controllers (scope)
        * using the ctrl as inside nested views on controllers (this)

08 - factory * removed persistence

Need to think about this more, might be worth explaining promises and or http in their own section!

09 - hooking up the factory

* Might be worth mentioning dependency injection here again... quite a big feature should be understood or it's like.. Where did InboxFactory come from?
* tiny section could just be a sub section?

10 - templating and directives

* this is 2 large subjects... split them up??
* view templating section is at part 13, probably worth doing here instead... it's like the first thing you do in the official angular tutorial.
* 





