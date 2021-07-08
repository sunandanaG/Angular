import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  
  parentamount:number = 1000;
  parentmethod(amount:number)
  {
    
  this.parentamount=amount;
  console.log(amount)
  }
  

  // parentdata:String="child to parent communication";

  // parentmethod(value:String)
  // {
  //   // console.log(`inside parent ${value}`)
  // this.parentdata=value;
  // }


}
