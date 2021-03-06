import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-oops',
  templateUrl: './oops.component.html',
  styleUrls: ['./oops.component.css']
})
export class OopsComponent implements OnInit {

  courses:any = {}
  constructor(private webservice:JavaService)
  {

}  ngOnInit(): void {
  this.webservice.getProductsInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='oops') ? this.courses = val : console.log(-1))
  )
  }
  

}
