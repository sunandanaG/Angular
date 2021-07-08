import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productservice';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

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


