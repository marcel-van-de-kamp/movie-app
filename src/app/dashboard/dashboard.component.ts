import { Component, OnInit } from '@angular/core';

import { Movie, MovieService } from '../movies';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public favMovies: Movie[];

  public favsLoading: boolean;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.fetchFavMovies();
  }

  fetchFavMovies(): void {
    this.favsLoading = true;
    this.movieService.getFavMovies().then(
        movies => {
            this.favMovies = movies;
            this.favsLoading = false;
            });
  }
}
