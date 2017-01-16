import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // needs to be imported by ngModule
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { MoviesComponent } from './movies.component';

import { MovieDetailReactiveComponent } from './movie-detail-reactive/movie-detail-reactive.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieService } from './movie.service';

import { MoviesRoutingModule } from './movies.routes.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    MovieDetailReactiveComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule,
    SharedModule
  ],
  exports: [
  ],
  providers: [
    MovieService
  ],
  bootstrap: []
})

export class MoviesModule { }
