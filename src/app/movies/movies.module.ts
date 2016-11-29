import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //needs to be imported by ngModule
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies.component';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieService } from './movie.service';

import { MoviesRoutingModule } from './movies.routes.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports: [
  ],
  providers: [
    MovieService
  ],
  bootstrap: []
})

export class MoviesModule { }
