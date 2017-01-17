import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Movie } from '../movie';

@Component({
  selector: 'cw-movie-detail-reactive',
  templateUrl: './movie-detail-reactive.component.html',
  styleUrls: ['./movie-detail-reactive.component.scss']
})
export class MovieDetailReactiveComponent implements OnInit {
  @Input() movie: Movie;

  builder: FormBuilder;
  movieForm: FormGroup;

  constructor(builder: FormBuilder) {
    this.builder = builder;
  }

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {

    // this.movieForm = new FormGroup({
    //   name: new FormControl(this.movie.name),
    //   genre: new FormControl(this.movie.genre),
    //   rating: new FormControl(this.movie.rating)
    // });

    this.movieForm = this.builder.group({
      name: [this.movie.name, [ Validators.required, Validators.minLength(4)] ],
      genre: [this.movie.genre, [Validators.required]],
      rating: [this.movie.rating, [ Validators.nullValidator ]]
    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      Object.assign(this.movie, this.movieForm.value);
    } else {
      alert('form not valid');
    }
  }

}
