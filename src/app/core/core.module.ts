import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    NavComponent
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    console.log('constructor');
    if (parentModule) {
      console.log('parent');
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
