import { BrowserModule } from '@angular/platform-browser'; //voegt ng g module niet toe, nodig voor ng-if, ng-for, etc..
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common'; //voegt ng g module wel toe, maar ljkt niet nodig
import { MoviesComponent } from './movies.component';

import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MovieService } from './movie.service';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    MoviesComponent //don't export detail & list component, because they're private components within the movies component
  ],
  providers: [
    MovieService
  ],
  bootstrap: [MoviesComponent]
})

export class MoviesModule { }
