import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name:String='sunandana'
  getemployeeinfo()
  {
     return `the message in the function :${this.name}`
  }
}


