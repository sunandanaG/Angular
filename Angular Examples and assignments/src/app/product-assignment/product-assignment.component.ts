import { Component, OnInit } from '@angular/core';
import { ProductAssignService } from '../services/product-assign.service';

@Component({
  selector: 'app-product-assignment',
  templateUrl: './product-assignment.component.html',
  styleUrls: ['./product-assignment.component.css']
})
export class ProductAssignmentComponent implements OnInit {
  filter:any='all'
  funnel:any='a-z'

  products:any = []
  constructor(privateproductassignservice:ProductAssignService)
  {
    privateproductassignservice.getProductsInfo().subscribe(
      data => this.products=data,
      error =>console.log(error)
    )
 
  }
  
  ngOnInit(): void
  {

  }
}

  
  // productdetails=[
  //   {
  //     productid:1,
  //     productname:'kitkat',
  //     productprice:150,
  //     productdesc:'product contains 10units of kitkat chocolates',
  //     productimg:'assets/images/kitkat.jpg/'
  //     },
  //   {
  //     productid:2,
  //     productname:'diarymilk',
  //     productprice:250,
  //     productdesc:'product contains 8units of dairy milk chocolates',
  //     productimg:'assets/images/diarymilk.jpg/'
  //   },
  //   {
  //     productid:3,
  //     productname:'5 star',
  //     productprice:100,
  //     productdesc:'product contains 20units of 5star chocolates',
  //     productimg:'assets/images/5star.jpg/'
  //   },
  //   {
  //     productid:4,
  //     productname:'Hersheys',
  //     productprice:450,
  //     productdesc:'product contains 3units of Hersheys chocolates',
  //     productimg:'assets/images/hersheys.jpg/'
  //   },
  //   {
  //     productid:5,
  //     productname:'Gonemad',
  //     productprice:150,
  //     productdesc:'product contains 30 units of Gonemad Sticks',
  //     productimg:'assets/images/GoneMad.jpg/'
  //   }
  // ]
  //   }
  

