import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebComponent } from '../web/web.component';
import { JavaComponent } from '../java/java.component';
import { AngularComponent } from '../angular/angular.component';
import { Html5Component } from '../html5/html5.component';
import { AwsComponent } from '../aws/aws.component';
import { JdbcComponent } from '../jdbc/jdbc.component';
import { JavaScriptComponent } from '../java-script/java-script.component';
import { OopsComponent } from '../oops/oops.component';
const routes:Routes = [
  {path:'web', component:WebComponent,
  children:[
    {path:'angular', component:AngularComponent},
    {path:'html5', component:Html5Component },
    {path:'aws', component:AwsComponent },
  ] },
  {path:'java', component:JavaComponent,
children:[
  {path:'jdbc', component:JdbcComponent },
  {path:'javascript', component:JavaScriptComponent },
  {path:'oops', component:OopsComponent },
] }
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class TechRoutingModule { }
export const routingComponents = [WebComponent,JavaComponent]

