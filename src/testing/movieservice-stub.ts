import { Movie }        from '../app/movies/movie';

export var MOVIES: Movie[] = [
    new Movie(1, 'lord of the rings', 'scifi', 9),
    new Movie(2, 'star wars', 'scifi', 7),
    new Movie(3, 'pulp fiction', 'drama', 10),
    new Movie(4, 'shrek', 'animation', 5)
];

export class FakeMovieService {
    movies = MOVIES;
    lastPromise: Promise<any>;  // remember so we can spy on promise calls

    getMovies() {
        return this.lastPromise = Promise.resolve<Movie[]>(this.movies);
    }

    getFavMovies() {
        return this.lastPromise = Promise.resolve<Movie[]>(this.movies);
    }
}
