import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'cw-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  @Input() movie: Movie;
  @Output() save = new EventEmitter<Movie>();

  constructor() { }

  ngOnInit() {

  }

  onSaveClicked(value, isValid) {
    if (isValid) {
      Object.assign(this.movie, value);
      this.save.emit(this.movie);
    } else {
      alert('not valid');
    }
  }

  onResetClicked(form: NgForm) {
    form.resetForm(this.movie);
  }
}
