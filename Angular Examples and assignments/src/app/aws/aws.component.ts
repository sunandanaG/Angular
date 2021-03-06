import { Component, OnInit } from '@angular/core';
import { WebService } from '../services/web.service';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent implements OnInit {

  courses:any = {}
  constructor(private webservice:WebService)
  {

}  ngOnInit(): void {
  this.webservice.getProductsInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='aws') ? this.courses = val : console.log(-1))
  )
  }
}
