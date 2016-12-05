Assignment 9: Routing between components
==============================================

> ## Define two routes for the movies and dashboard component  

- Import the `RouterModule` and `Routes` in the movies module;
- Declare a constant `routes` with the type `Routes` in the movies module;
- Define the `routes` constant as an array with one object literal in it (a Route config object);
  - Set the `path` property of the Route config object to `'movies'`;
  - Set the `component` property of the Route config object to the `MoviesComponent`;
- Declare a variable `routeProviders` in the movies module;
  - Call the function `RouterModule.forChild` with the `routes` and assign the result to the `routeProviders` variable;
- Add the `routeProviders` variable to the `imports` array of the movies module;
> Are you getting a runtime error that ngIf and ngFor are not recognized? Make sure you import the angular common module into the module `imports` array;
* *Repeat the steps above for the dashboard module*;

- Remove the selectors from the movies and dashboard component;
- Remove the movies and dashbaord components from the `exports` array in the movies and dashboard module;
- Replace the `movies` and `dashboard` components from the app component template with a `<router-outlet>` component;

> You can now navigate to URL `localhost:4200/dashboard` and `localhost:4200/movies` to activate the routes you created.

> ## Set the dashboard component as default route

> ## Extract the routing configuration into it's own module

**Links**:
- [Why Routing](https://angular-2-training-book.rangle.io/handout/routing/why_routing.html)
- [Configuring Routes](https://angular-2-training-book.rangle.io/handout/routing/config.html)
- [Angular 2 Router intro](http://blog.angular-university.io/angular2-router/)
- [Routing and Navigation](https://angular.io/docs/ts/latest/guide/router.html)
