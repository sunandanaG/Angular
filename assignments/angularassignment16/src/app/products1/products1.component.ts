import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-products1',
  templateUrl: './products1.component.html',
  styleUrls: ['./products1.component.css']
})
export class Products1Component implements OnInit {

  filter:any='all'

  funnel:any='a-z'



  products:any = []

  constructor(private productservice:ProductService)

  {

   productservice.getProductsInfo().subscribe(

     data => {this.products=data

    console.log(data)},

     error =>console.log(error)




   )

  }





  ngOnInit(): void {




  }



}


