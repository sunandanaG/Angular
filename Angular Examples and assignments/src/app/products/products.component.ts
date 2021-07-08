import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 productarray = [
  {
  productid:1,
  productname:'kitkat',
  productprice:150,
  productdesc:'product contains 10units of kitkat chocolates',
  productimg:'assets/images/kitkat.jpg/'},
  {
    productid:2,
    productname:'diarymilk',
    productprice:250,
    productdesc:'product contains 8units of dairy milk chocolates',
    productimg:'assets/images/diarymilk.jpg/'
  },
  {
    productid:3,
    productname:'5 star',
    productprice:100,
    productdesc:'product contains 20units of 5star chocolates',
    productimg:'assets/images/5star.jpg/'
  },
  {
    productid:4,
    productname:'Hersheys',
    productprice:450,
    productdesc:'product contains 3units of Hersheys chocolates',
    productimg:'assets/images/hersheys.jpg/'
  }
]
}
