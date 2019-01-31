import { TestBed, inject } from '@angular/core/testing';

import { FetchlistService } from './fetchlist.service';

describe('FetchlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchlistService]
    });
  });

  it('should be created', inject([FetchlistService], (service: FetchlistService) => {
    expect(service).toBeTruthy();
  }));
});
