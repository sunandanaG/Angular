import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAssignmentComponent } from './product-assignment.component';

describe('ProductAssignmentComponent', () => {
  let component: ProductAssignmentComponent;
  let fixture: ComponentFixture<ProductAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
