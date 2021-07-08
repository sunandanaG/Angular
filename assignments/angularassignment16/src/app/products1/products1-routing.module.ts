import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Products1Component } from './products1.component';

const routes: Routes = [{ path: '', component: Products1Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Products1RoutingModule { }
