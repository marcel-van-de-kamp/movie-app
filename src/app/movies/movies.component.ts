import { Component, OnInit } from '@angular/core';
import { MovieService } from './movie.service';
import { Movie } from './movie';



@Component({
    selector: 'cw-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
    public movies: Movie[];
    public selectedMovie: Movie;

    public moviesLoading: boolean;
    public movieLoading: boolean;

    private movieService: MovieService;
    constructor(movieService: MovieService) {
        this.movieService = movieService;
    }

    ngOnInit() {
        this.getMovies();
    }

    onMovieSelected(movie: Movie): void {
        this.movieLoading = true;
        this.selectedMovie = Object.assign({}, movie);
        this.movieLoading = false;
    }

    onSaveMovie(movie: Movie) {
        this.movieService.updateMovie(movie).subscribe(() => {
            this.getMovies();
        });
    }

    private getMovies() {
        this.moviesLoading = true;

        this.movieService.getMovies().subscribe(
          (result) => { this.movies = result; this.moviesLoading = false; },
          (e) => { alert('ophalen van movies ging nie goed..'); this.moviesLoading = false; },
          () => {  } // <-- werkt niet, iets met finally?
        );
    }
}
