import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalciserviceService {
  

  constructor() { }
  doOperation(a: number, b: number, value: any): any {
  
    if(value=='+'){
      return a+b;

    }
    else if(value=='-'){
      return a-b;

    }
    else if(value=='*'){
      return a*b;

    }
    else{
      return a/b;

    }
  }
}
