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

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movies = this.movieService.getMovies();

  }

  onMovieClicked(event:Movie): void {
    this.selectedMovie = event; 
  }

}
