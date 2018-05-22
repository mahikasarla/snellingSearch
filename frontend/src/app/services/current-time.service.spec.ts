import { TestBed, inject } from '@angular/core/testing';

import { CurrentTimeService } from './current-time.service';

describe('CurrentTimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentTimeService]
    });
  });

  it('should be created', inject([CurrentTimeService], (service: CurrentTimeService) => {
    expect(service).toBeTruthy();
  }));
});
