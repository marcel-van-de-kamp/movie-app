import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Movie } from './movie';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieService {
    private moviesUrl = 'api/movies';  // URL to web api
    private moviesFavUrl = 'api/moviesFav';

    constructor(private http: HttpClient) { }

    getMovies(): Promise<Movie[]> {
        // const observe = this.http.get<Movie[]>(this.moviesUrl);
        // const promise = observe.toPromise();

        // const result = promise.then((response) => response.json() as Promise<Movie[]>);

        // return result;

        return this.http.get<Movie[]>(this.moviesUrl)
            .toPromise()
            .then((response) => response)
            .catch(this.handleError);
    }

    getFavMovies(): Promise<Movie[]> {
        return this.http.get(this.moviesFavUrl)
            .toPromise()
            .then(response => response)
            .catch(this.handleError);
    }

    updateMovie(movie: Movie): Promise<Movie> {
        const url = `${this.moviesUrl}/${movie.id}`;
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        return this.http
            .put<Movie>(url, movie, options)
            .toPromise()
            .then(() => movie)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}
