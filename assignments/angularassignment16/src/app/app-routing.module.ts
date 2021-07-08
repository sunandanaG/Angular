import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: 'products1', loadChildren: () => import('./products1/products1.module').then(m => m.Products1Module) },

  { path: 'technology', loadChildren: () => import('./technology/technology.module').then(m => m.TechnologyModule) },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];
 
 @NgModule
 ({
 
   imports: [RouterModule.forRoot(routes)],
 
   exports: [RouterModule]
 
 })
export class AppRoutingModule { }
