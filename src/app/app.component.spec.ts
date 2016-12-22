/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { RouterLinkStubDirective }   from '../testing';
import { RouterOutletStubComponent } from '../testing';

fdescribe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent,
        RouterLinkStubDirective,
        RouterOutletStubComponent
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges(); // will do the first render (ngOnInit)
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app works!'`, () => {
    expect(app.title).toEqual('MOVIES!');
  });

  it('should render title in a h1 tag', () => {
    el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h1').textContent).toContain('MOVIES!');
  });
});
