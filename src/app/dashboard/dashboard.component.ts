import { Component, OnInit } from '@angular/core';

import { Movie } from '../movies/movie';
import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public favMovies: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit() {

    this.movieService.getFavMovies().then(movies => this.favMovies = movies);
    
  }

}
