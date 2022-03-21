import { TestBed } from '@angular/core/testing';

import { FinishedService } from './finished.service';

describe('FinishedService', () => {
  let service: FinishedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinishedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
