/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoadingBarService } from './loading-bar.service';

describe('LoadingBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingBarService]
    });
  });

  it('should ...', inject([LoadingBarService], (service: LoadingBarService) => {
    expect(service).toBeTruthy();
  }));
});
