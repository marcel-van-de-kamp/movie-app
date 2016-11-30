Assignment 1: Displaying a list of movies
==============================================

## Use the app component to define an array of movie objects and display it as a list in the browser.

- Declare a public variable in the app component `'movies'` and give it the typing array of any `'any[]'`;
- Initialize the movies array in the constructor as an array of movie objects;
  - Fill the array with a couple of good movies;
  - A movie object has the following properties: id, name, genre, rating;


- Create an unordered list in the template of the app component `'<ul></ul>'`;
- Create one list item in the list `'<li></li>'` and use an `'*ngFor'` to loop over the movies;
  - Display the name for each movie in the array;

**Links:**  
- [html lists](http://www.w3schools.com/html/html_lists.asp)
- [structural directives (ngFor)](https://angular-2-training-book.rangle.io/handout/directives/ng_for_directive.html)
- [typescript basic types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
