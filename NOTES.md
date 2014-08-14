Large Sections:
* 03-setup
* 06-routing
* 08-factory
* 11-templating - very big
* 13-view templating
* 14-DI

## App
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

## Sections

01 - intro

    - MODELS ARE NOT SERVER COMMUNICATION ARGGGHHHH!!!!!!!! THATS A GATEWAY. MODELS ARE BUSINESS OBJECTS

02 - data-binding

    - do we need two way data binding explained so early?? it just comes from nowhere in the article.

03 - setup

    - dives straight into ng-view in example, talks about controller but doesn't explain it.
    - should explain scope
        - app scope / controller scope
    - could use an NG-VIEW / routes section

04 - DEPS 

    - changed name of this, avoiding word dependencies to keep the idea of dependencies clear for DI
    - should we be using the beta?? better to use stable maybe? / it's what's supported by testing frameworks etc.
    - don't necessarily need the jQuery for this application either.

05 - Module

    - it's not just 'namespacing' though really... 
        - it's javascript scope & dependency management 
    - Notice the empty array, here it's being used as a setter
    - ENCOURAGE GLOBAL MyModule Var???
        - discouraged here
            https://github.com/mgechev/angularjs-style-guide
            and
            https://github.com/johnpapa/angularjs-styleguide

06 - routing

    - config isn't a module, it's a function
    - using dependency injection here without explaining it

07 - controllers

    - Dogmatic suggestion of using 'this' instead of $scope
        - disagreement here:
            http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers
        - heated topic in my opinion... worth showing benefits of both
            - this is good for exposing API methods to directives
            - this is bad for exposing API methods to child controllers
                - but this should be avoided anyway
            - can use scope to expose API methods to child controllers
            - so many ways to guide this communication such as 
                - 'require'
                - 'scope: { '&@=' },
                - using calls directly in views on parent scopes.

08 - factory

    - 'think of them as a provider' ? whats a provider
        - seems to narrow their scope a little.. they can be anything!
            - alert management, state controls, loggers, analytics, notifications, complete functional operations not tied to business objects, all sorts!
    - talking too much about persistence!  [ GRRR everyone just wants to h**p their DB all the time. ]
    - exports object / seems like a very (this is the way I do it)
        - kinda makes something explicit and helpful for node people potentially
        - not necessary/ good or bad practice?  not sure
    - talk about closures in factories for private variables? (people might think you _need_ "exports" variable which you don't)
    - $http isn't jQuery-like at all (and not even like $.ajax)... it's a promise with 2 sugar methods; no success handler and the options are very different
    - seems like their's no point in the $q here... $http returns almost exactly the same thing but with more information, can just return it straight up.
    - says json file would be an endpoint but it IS an endpoint here anyway, still making a http req for it... wouldn't necessarily be a restful endpoint though ±_±, often projects use json files internally.

09 - hooking up the factory

    -


