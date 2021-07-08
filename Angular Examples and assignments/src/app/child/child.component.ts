import { EventEmitter } from '@angular/core';
import { Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent  {

  
    @Input() amount:number=0;

    @Output() newEvent:EventEmitter<number> = new EventEmitter<number>();

  MutualFunds() 
  {
    this.amount++;
    
    this.newEvent.emit(this.amount++);
  }
  StockMarket()
  {
    this.amount--;
    this.newEvent.emit(this.amount--)
  }
    // @Output() notify:EventEmitter<String>=new EventEmitter<String>();
    // SenddatafromChildtoParent(){
    //   this.notify.emit('child data sending from ChildComponent')
    // }
  }
  


