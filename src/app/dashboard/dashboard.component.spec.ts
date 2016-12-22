/* 
  tslint:disable:no-unused-variable
*/
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MOVIES, FakeMovieService } from '../../testing';
import { DashboardComponent } from './dashboard.component';
import { LoadingContainerComponent } from '../shared/loading-container/loading-container.component';
import { MovieService } from '../movies/movie.service';


fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let spy: jasmine.Spy;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        LoadingContainerComponent
      ],
      providers: [
        { provide: MovieService, useClass: FakeMovieService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    el = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;
    spy = spyOn(component, 'fetchFavMovies').and.callThrough();
    fixture.detectChanges(); // will do the first render (ngOnInit)
  });

  it('should create the dashboard component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a title in a h2 tag', () => {
    // let de: DebugElement = fixture.debugElement.query(By.css('h2'));
    // let el: HTMLElement = de.nativeElement;
    // el = fixture.debugElement.nativeElement;
    expect(el.querySelector('h2').textContent).toContain('Favorite movies');
  });

  it('should set the favsLoading boolean to true', () => {
    expect(component).toBeTruthy();
    expect(component.favsLoading).toBe(true);
  });

  it('should fetch the favorite movies', () => {
    expect(component.fetchFavMovies).toHaveBeenCalled();
  });

  it('should set the favsLoading boolean to false when movies are fetched', async(() => {
    fixture.whenStable().then(() => { // wait for async getFavMovies
      fixture.detectChanges();        // update view with favMovies

      expect(component.favsLoading).toBe(false);
    });
  }));

  it('should display 4 favorite movies', async(() => {

    fixture.whenStable().then(() => { // wait for async getFavMovies
      fixture.detectChanges();        // update view with favMovies

      let moviesEl: NodeListOf<HTMLElement> = el.querySelectorAll('li');
      expect(moviesEl.length).toBe(4);
    });
  }));

  it('should display the lord of the rings as the first movie', async(() => {
    fixture.whenStable().then(() => { // wait for async getFavMovies
      fixture.detectChanges();        // update view with favMovies

      let moviesEl: NodeListOf<HTMLElement> = el.querySelectorAll('li');

      expect(moviesEl[0].querySelector('div').textContent).toContain('lord of the rings');
    });
  }));
});
