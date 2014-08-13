## Two way data-binding

Two way data-binding is easy to understand. You have a Model, and it's bound to the View. A user of an application will make changes to the View, in turn Angular keeps the Model bound to this View synchronised.

Any data updated from the server that updates the Model is also instantly reflected in the View, this is fantastic for keeping querying down, code cleaner and not having to manually maintain Model states, we can just reference a Model and push it to the server for example.