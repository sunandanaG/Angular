import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  filter:any='all'
  funnel:any='a-z'

  courses:any = []
  constructor(privatejavaservice:JavaService)
  {
    privatejavaservice.getProductsInfo().subscribe(
      data => this.courses=data,
      error =>console.log(error)
    )
 
  }
  
  ngOnInit(): void
  {

  }
}


