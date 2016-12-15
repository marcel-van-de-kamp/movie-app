import { Component, OnInit, Input } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie:Movie;

  constructor() { }

  ngOnInit() { }

  onSubmit(value: Movie): void {
    Object.assign(this.movie, value);
  }
}
