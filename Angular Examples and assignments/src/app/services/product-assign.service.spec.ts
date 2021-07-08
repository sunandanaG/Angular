import { TestBed } from '@angular/core/testing';

import { ProductAssignService } from './product-assign.service';

describe('ProductAssignService', () => {
  let service: ProductAssignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAssignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
