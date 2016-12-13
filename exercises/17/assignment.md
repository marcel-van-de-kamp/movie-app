Assignment 17: Validating and processing user input
==============================================

> ## Extend the movie detail component so you can edit the properties of a movie and reflect it back to the model

**Links**:
- [user input](https://angular.io/docs/ts/latest/guide/user-input.html)
- [ngmodel directive](https://angular.io/docs/ts/latest/api/forms/index/NgModel-directive.html)
- [two way binding](https://angular-2-training-book.rangle.io/handout/components/app_structure/two_way_data_binding.html)
- [template driven forms](https://angular-2-training-book.rangle.io/handout/forms/template-driven/template-driven_forms.html)
- [forms with validation](https://angular.io/docs/ts/latest/cookbook/form-validation.html)


**Steps**:
- To start with forms in angular, the `FormsModule` needs to be imported from `@angular/forms`. Add this module to the `imports` array of the movies module
- Add two input fields of type `text` (name and genre) to the movie-detail component template and one of type `number` (rating)
> The `ngModel` directive is also exported from the `FormModule` and can be used for 'two way binding'
- Use the ngModel directive to bind the inputs to the name, genre and rating properties of the movie object  
> Test it in the browser. We don't want the changes to be directly be reflected in the list, so we will give a copy of the movie to the movie details;
- In the movies component, use the `Object.assign` function to set the `selectedMovie` property to a clone of the clicked movie (event);
- do shit with: #movieform="ngform", ngsubmit, ngmodel, input vailidation and input messages, saving the data

**Result**:
> We are now able to change the values of the details of a movie and reflect it back to the model
