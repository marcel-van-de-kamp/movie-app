Assignment 1: Displaying a list of movies
==============================================

## Use the app component to define an array of movie objects and display it as a list in the browser.

- Create a (private) variable in the app component `'movies'` with a type array of any `'any[]'`
- Initialize the movies array (in the constructor) as an array of movie objects
  - Fill the array with a couple of good movies
  - A movie object has the following properties: id, name, genre, rating


- Create an unordered list in the template of the app component `'<ul></ul>'`
- Create one list item in the list `'<li></li>'` and use an `'*ngFor'` to loop over the movies
  - Display the name for each movie in the array
