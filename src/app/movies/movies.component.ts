import { Component, OnInit } from '@angular/core';

import { Movie } from './movie';
import { MovieService } from './movie.service';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  public movies: Movie[];
  public selectedMovie: Movie;

  public moviesLoading: boolean;
  public movieLoading: boolean;

  constructor(private movieService: MovieService) {

  }

  ngOnInit() {
    this.fetchMovies();
  }

  onMovieClicked(event:Movie): void {
    this.selectedMovie = event;
  }

  fetchMovies(): void {
    this.moviesLoading = true;
    this.movieService.getMovies().then(movies => {
        this.movies = movies;
        this.moviesLoading = false;
    });
  }
}
