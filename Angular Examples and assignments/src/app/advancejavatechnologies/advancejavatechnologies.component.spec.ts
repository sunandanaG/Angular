import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancejavatechnologiesComponent } from './advancejavatechnologies.component';

describe('AdvancejavatechnologiesComponent', () => {
  let component: AdvancejavatechnologiesComponent;
  let fixture: ComponentFixture<AdvancejavatechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancejavatechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancejavatechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
