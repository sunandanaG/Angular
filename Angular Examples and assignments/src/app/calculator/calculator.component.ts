import { Component, OnInit } from '@angular/core';
import { CalciserviceService } from '../services/calciservice.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  a:any
  b:any
  result:any
  constructor(private calculator:CalciserviceService) { }

  ngOnInit(): void {
  }


  Operation(value:any){
    var n1 = (Number)(this.a)
    var n2 = (Number)(this.b)
   this.result= this.calculator.doOperation(n1,n2,value)

  }

  // doOperation(n1:any,n2:any,operator:any)
  // {
  //   var a =(Number)(n1)
  //   var b =(Number)(n2)

  //    if(operator=='+')
  //    {
  //      this.result=a+b
  //    }
  //    else if(operator=='-')
  //    {
  //      this.result=a-b
  //    }
  //    else if(operator=='x')
  //    {
  //      this.result=a*b
  //    }
  //    else
  //    {
  //      this.result=a/b
  //    }
  // }
  

}
