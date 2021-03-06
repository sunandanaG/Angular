import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/services/java.service';

@Component({
  selector: 'app-java-script',
  templateUrl: './java-script.component.html',
  styleUrls: ['./java-script.component.css']
})
export class JavaScriptComponent implements OnInit {

  courses:any = {}
  constructor(private webservice:JavaService)
  {

}  ngOnInit(): void {
  this.webservice.getProductsInfo().subscribe(
    data => data.forEach((val:any) => (val.courseid=='javascript') ? this.courses = val : console.log(-1))
  )
  }

}
