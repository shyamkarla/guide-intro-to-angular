#### Glossary:
Article - MD file to be converted to HTML
Section - part of the article
App - The working project (source files)
Stage - Point in the apps growth including source files

## Large Sections Need Splitting Up

* 08-factory & Promises
* 11-templating - very big
* 13-view templating
* 14-DI

_____
## App downloads

Inside the revised app folder there are a number of sections each showing the project at a working stage growing from 01 to final.

Here is a list of the sections of the article that are appropriate for each of these stages of the project

#### 01-include-angular
- Section 2 including angular

#### 02-first-controller
- Section 8 Controllers

Considering the ngView importance in this app, to get a first controller setup we need to explain sections 2 to 8 for the next pieces to work!

#### 03-inbox-factory
- Section 9 Promises

Promises are a massive part of this application so they are used to explain the controller that uses the factory in section 8.




_____


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

// moved the inclusion of angular to earlier so each step will keep working


03 - setup * split into scopes and ngview



04 - DEPS * renamed to including angular

* using stable version : it's what's supported by testing frameworks / component libraries / etc.
* don't necessarily need jQuery for this application either. worth talking about but adds nothing to project. leaving it in anyway though



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

Maybe split HTTP into another setion

Adding a new section for promises



09 - hooking up the factory

* Explained \Where did InboxFactory come from?\
* tiny section is now just a sub section for factories?

* Moved the view information 'title' _out_ of the file that does the $http.... WOW, now exists in the controller, where it kinda should :S Infact it could basically exist in the view REALLY.

///
*  Include bad practice on purpose for the sake of introducing directives




10 - templating and directives

* this is 2 large subjects... split them up??
* view templating section is at part 13, probably worth doing here instead... it's like the first thing you do in the official angular tutorial.
* 

    removed the section 13 on view tmpl and put something here instead

    Tidied up the factory a little bit, no longer setting messages of factory inside the directive
        after just invoking the factory method <face-palm> why make this coupling??

* problem here... lots of advance view logic using ng-model, ng-hide, ng-show, ng-repeat, ng-click
    it's not explained



