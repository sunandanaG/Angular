import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

fdescribe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('validate the addition result is equal to 8', () => {
    const addResult = service.addOperation(5,3)
    expect(addResult).toBe(8)
  })
  it('validate the subtraction result is equal to 2', () => {
    const subResult = service.subOperation(5,3)
    expect(subResult).toBe(2)
  })
  it('validate the multiplication result is equal to 15', () => {
    const mulResult = service.mulOperation(5,3)
    expect(mulResult).toBe(15)
  })


});
