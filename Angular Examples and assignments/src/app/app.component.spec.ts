import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CalculatorService } from './services/calculator.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'VAMProject1'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('VAMProject1');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('VAMProject1 app is running!');
  });

  // it('calc service add method', () =>
  // {
  //   const calcsrvc=TestBed.inject(CalculatorService)
  //   const addresult=calcsrvc.addOperation(2,3)
  //   expect(addresult).toEqual(5)
  // }
  // )
});
