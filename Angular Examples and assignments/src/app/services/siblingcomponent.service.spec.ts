import { TestBed } from '@angular/core/testing';

import { SiblingcomponentService } from './siblingcomponent.service';

describe('SiblingcomponentService', () => {
  let service: SiblingcomponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SiblingcomponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
