import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { Movie } from '../movie';
import { ratingValidator } from '../rating-validator';

@Component({
  selector: 'cw-movie-detail-reactive',
  templateUrl: './movie-detail-reactive.component.html',
  styleUrls: ['./movie-detail-reactive.component.scss']
})
export class MovieDetailReactiveComponent implements OnInit, OnChanges {
  @Input() movie: Movie;
  @Output() save = new EventEmitter<Movie>();


  movieForm: FormGroup;
  private builder: FormBuilder;
  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  ngOnInit() {
    // this.movieForm = new FormGroup({
    //   name: new FormControl(this.movie.name, Validators.compose([Validators.required, Validators.minLength(4)])),
    //   genre: new FormControl(this.movie.genre, [Validators.required]),
    //   rating: new FormControl(this.movie.rating, [ratingValidator(1, 10)])
    // });

    this.movieForm = this.builder.group({
      name: [this.movie.name, [Validators.required, Validators.minLength(4)]],
      genre: [this.movie.genre, [Validators.required]],
      rating: [this.movie.rating, [ratingValidator(1, 10)]]
    });
  }

  ngOnChanges(changesObject: SimpleChanges): void {
    if (changesObject['movie']) {
      let values = changesObject['movie'];
      if (!values.isFirstChange()) {
        this.updateFormValues(this.movie);
      }
    }
  }

  private updateFormValues(movie: Movie) {
    if(this.movieForm) {
      const { name, genre, rating } = movie;
      this.movieForm.setValue({ name, genre, rating }, { onlySelf: true });
    }
  }

  onSaveClicked() {
    if (this.movieForm.valid) {
      this.movie = { ...this.movie, ...this.movieForm.value };
      // Object.assign(this.movie, this.movieForm.value);
      this.save.emit(this.movie);
    }
  }

  onResetClicked(form: FormGroup) {
    form.reset(this.movie);
  }
}
