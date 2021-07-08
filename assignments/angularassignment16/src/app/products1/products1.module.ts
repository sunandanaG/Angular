import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Products1RoutingModule } from './products1-routing.module';
import { Products1Component } from './products1.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    Products1Component
  ],
  imports: [
    CommonModule,
    Products1RoutingModule,HttpClientModule,SharedModule,FormsModule
  ]
})
export class Products1Module { }
