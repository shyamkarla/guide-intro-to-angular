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

## Concerns in the Sections

01 - intro

* MODELS ARE NOT SERVER COMMUNICATION ARGGGHHHH!!!!!!!! THATS A GATEWAY. MODELS ARE BUSINESS OBJECTS </calming down> (I see people encourage this a lot and find it very detrimental to teams I've worked in; I'm not alone in this experience either... databases break, business objects don't! :)

02 - data-binding

* do we need two way data binding explained so early?? it just comes from nowhere in the article. (removed from modified content)

03 - setup

* article dives straight into ng-view in example, talks about controller but doesn't explain it. lots unanswered!
* should explain scope here instead (vital to angular)
    * app scope / controller scope
* could use separate section for ng-view & routes section (added to modified content whilst removing other blabber)

04 - DEPS 

* changed name of this section, think it's best to avoid using the word 'dependency' when talking about js files and to keep the idea of dependencies clear for DI as it's important for angular.
* should we be using the angular beta version?? better to use stable maybe? / it's what's supported by testing frameworks / component libraries / etc.
* don't necessarily need jQuery for this application either. worth talking about but adds nothing to project.

05 - Module

* modules are not just 'namespacing'... 
    * they're application sub scope & dependency management 
* ENCOURAGE GLOBAL MyModule Var??? hmmmm...

discouraged here https://github.com/mgechev/angularjs-style-guide
and here https://github.com/johnpapa/angularjs-styleguide

06 - routing

* config() isn't a module, it's a function
* using dependency injection here without explaining it

07 - controllers

* Dogmatic suggestion of using 'this' instead of $scope

there's a valid disagreement here: http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
    
* it's a heated topic in my opinion... worth showing benefits of both instead of being so dogmatic
    * 'this' is good for exposing API methods to other directives
    * don't want everything exposed though, scope is good for private
    * scope is also where $apply/$watch/forms/etc.. live
    * so many ways to guide this inter-scope-communication such as: 
        * 'require' and ctrl in directive ('this' only)
        * 'scope: { '&@=' }, in directive (both)
        * call on parent $scope directly in views of nested controllers (scope)
        * using the ctrl as inside nested views on controllers (this)

08 - factory

* 'think of them as a provider' but whats a provider, it's never explained..
    * seems to narrow their scope a little.. they can be anything!
        * alert management, state controls, loggers, analytics, notifications, complete functional operations not tied to business objects, all sorts!
* talking too much about persistence!  [ GRRR everyone just wants to h**p their DB all the time. ]
* exports object / seems like a very (this is the way I do it)
    * kinda makes something explicit and helpful for node people potentially which is nice
    * not necessary/good or bad practice?  not sure
    * talk about closures in factories for private variables instead?
        * (people might think you _need_ an "exports" variable, which you don't)
* $http isn't jQuery-like at all (and not even like $.ajax)... it's a promise with 2 sugar methods; no success handler and the options are very different
* seems like their's no point in the $q here... $http returns almost exactly the same thing but with more information, can just return it straight up. suppose it's helpful to explicitly return a promise despite the extra dependency and much more verbose code.
* says json file *would usually* be an endpoint *instead* but it IS an endpoint here anyway, still making a HTTP req for it... wouldn't necessarily be a restful endpoint though ±_±, often projects use json files internally.

09 - hooking up the factory

* Might be worth mentioning dependency injection here again... quite a big feature should be understood or it's like.. Where did InboxFactory come from?
* tiny section could just be a sub section?

10 - templating and directives

* this is 2 large subjects... split them up??
* view templating section is at part 13, probably worth doing here instead... it's like the first thing you do in the official angular tutorial.
* 





