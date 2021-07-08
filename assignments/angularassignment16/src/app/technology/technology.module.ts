import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyComponent } from './technology.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WebComponent } from './web/web.component';
import { JavaComponent } from './java/java.component';
import { JavaScriptComponent } from './java-script/java-script.component';
import { Html5Component } from './html5/html5.component';
import { OopsComponent } from './oops/oops.component';
import { JdbcComponent } from './jdbc/jdbc.component';
import { AngularComponent } from './angular/angular.component';
import { AwsComponent } from './aws/aws.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TechnologyComponent,WebComponent,JavaComponent,
    JavaScriptComponent,Html5Component,
    OopsComponent,JdbcComponent,AngularComponent,AwsComponent
  ],
  imports: [
    CommonModule,
    TechnologyRoutingModule,HttpClientModule,SharedModule,FormsModule
  ]
})
export class TechnologyModule { }
