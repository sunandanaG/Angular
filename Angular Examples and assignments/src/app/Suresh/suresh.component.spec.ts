import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SureshComponent } from './suresh.component';

describe('SureshComponent', () => {
  let component: SureshComponent;
  let fixture: ComponentFixture<SureshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SureshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SureshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
