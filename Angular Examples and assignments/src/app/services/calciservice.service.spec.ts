import { TestBed } from '@angular/core/testing';

import { CalciserviceService } from './calciservice.service';

describe('CalciserviceService', () => {
  let service: CalciserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalciserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
