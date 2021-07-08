import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorejavatechnologiesComponent } from './corejavatechnologies.component';

describe('CorejavatechnologiesComponent', () => {
  let component: CorejavatechnologiesComponent;
  let fixture: ComponentFixture<CorejavatechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorejavatechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorejavatechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
