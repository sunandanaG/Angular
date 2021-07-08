import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { SortingPipe } from './shared/pipes/sorting.pipe';
import { ProductsComponent } from './products/products.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,SharedModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports :[SearchPipe,SortingPipe]
})
export class AppModule { }
