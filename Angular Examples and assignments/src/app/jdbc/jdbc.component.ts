import { Component, OnInit } from '@angular/core';
import { JavaService } from '../services/java.service';

@Component({
  selector: 'app-jdbc',
  templateUrl: './jdbc.component.html',
  styleUrls: ['./jdbc.component.css']
})
export class JdbcComponent implements OnInit {

  courses:any = {}
  constructor(private webservice:JavaService)
  {

}  ngOnInit(): void {
  this.webservice.getProductsInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='jdbc') ? this.courses = val : console.log(-1))
  )
  }

}
