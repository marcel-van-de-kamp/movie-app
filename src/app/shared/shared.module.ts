import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingContainerComponent } from './loading-container/loading-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoadingContainerComponent],
  exports: [LoadingContainerComponent]
})
export class SharedModule { }
