import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Movie } from '../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.sass']
})
export class MovieListComponent implements OnInit {
  @Input() movies:Movie[];
  @Output() movieClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onMovieClicked(movie:Movie):void {
    this.movieClicked.emit(movie);
  }

}
