import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies.component';

const moviesRoutes: Routes = [
  { path: 'movies',  component: MoviesComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(moviesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
