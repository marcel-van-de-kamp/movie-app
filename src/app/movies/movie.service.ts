import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

import { Movie } from './movie';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieService {
    private moviesUrl = 'api/movies';  // URL to web api
    private moviesFavUrl = 'api/moviesFav';

    constructor(private http: HttpClient) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.moviesUrl)
                        .pipe(catchError(this.handleError));
    }

    getFavMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>(this.moviesFavUrl)
                        .catch(this.handleError);
    }

    updateMovie(movie: Movie): Observable<Movie> {
        const url = `${this.moviesUrl}/${movie.id}`;
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

        return this.http
            .put<Movie>(url, movie, options)
            .catch(this.handleError);
    }

    private handleError(httpError: HttpErrorResponse): Observable<any> {
        let error = httpError.error;

        if (httpError.error instanceof Error) {
            error = httpError.error.message;
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', httpError.error.message);
          } else {
            error = httpError.error || httpError['body'].error;
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Back-end returned code ${httpError.status}, body was: ${httpError.error || httpError['body'].error}`);
          }

          // ...optionally return a default fallback value so app can continue
          return Observable.throw(error);

          // OR 'rethrow' the error so components can do their own error handling
          // return Observable.throw(error);
    }
}
