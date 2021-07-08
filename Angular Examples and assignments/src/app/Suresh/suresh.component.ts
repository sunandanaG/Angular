import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suresh',
  templateUrl: './suresh.component.html',
  styleUrls: ['./suresh.component.css']
})
export class SureshComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:string = 'suresh';
  age:number = 35;

  // variables inside the object
  customer=
{
  cname:'sunandana',
  cid:1,
  branch:'cse'
}
  

}

