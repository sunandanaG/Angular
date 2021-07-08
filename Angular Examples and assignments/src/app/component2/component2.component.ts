import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  customers:any=[]

  customers1:any=[

    {"empId":201,"empName":"Varsha","salary":30000},

    {"empId":202,"empName":"Sunandana","salary":25000},

    {"empId":203,"empName":"Asritha","salary":45000}

  ]

  constructor(private dataService:DataService) {

    dataService.currentMsg.subscribe((successMsg: any) => this.customers = successMsg)

  }

  ngOnInit(): void {  }

  modifiedData(){

     for(var i=0;i<this.customers1.length;i++){

    this.dataService.changeData(this.customers1[i])

     }

  }




}

