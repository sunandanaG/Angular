import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  customers:any=[]

  customers1:any=[

    {"empId":101,"empName":"Varsha","salary":30000},

    {"empId":102,"empName":"Sunandana","salary":25000},

    {"empId":103,"empName":"Asritha","salary":45000}

  ]

 

   constructor(private dataService:DataService) {

 

   }

   ngOnInit(): void {

     this.dataService.currentMsg.subscribe((successMsg: any) => this.customers = successMsg)

    }

   modifiedData()

   {

       for(var i=0;i<this.customers1.length;i++){

       this.dataService.changeData(this.customers1[i])

        }

 

   }

 



}


