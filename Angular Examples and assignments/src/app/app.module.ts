import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SureshComponent } from './Suresh/suresh.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { StructDirectivesComponent } from './struct-directives/struct-directives.component';
import { ProductsComponent } from './products/products.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MycolorDirective } from './directives/mycolor.directive';
import { PipesComponent } from './pipes/pipes.component';
import { MyuppercasePipe } from './mypipes/myuppercase.pipe';
import { ProductarrayComponent } from './productarray/productarray.component';
import { SearchPipe } from './pipes/search.pipe';
import { SortingPipe } from './pipes/sorting.pipe';
import { ProductAssignmentComponent } from './product-assignment/product-assignment.component';
import { NgcolorDirective } from './directives/ngcolor.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { JavaComponent } from './java/java.component';
import { WebComponent } from './web/web.component';
import { TechRoutingModule } from './tech-routing/tech-routing.module';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { CorejavatechnologiesComponent } from './corejavatechnologies/corejavatechnologies.component';
import { AdvancejavatechnologiesComponent } from './advancejavatechnologies/advancejavatechnologies.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
// import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';

// const routes:Routes = [
//   {path:'web', component:WebComponent },
//   {path:'java', component:JavaComponent }
// ]


@NgModule({
  declarations: [
    AppComponent,
    SureshComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    StructDirectivesComponent,
    ProductsComponent,
    CalculatorComponent,
    AttributeDirectiveComponent,
    MycolorDirective,
    PipesComponent,
    MyuppercasePipe,
    ProductarrayComponent,
    SearchPipe,
    SortingPipe,
    ProductAssignmentComponent,
    // NgColorDirective,
    NgcolorDirective,
    ParentComponent,
    ChildComponent,
    FirstComponent,
    SecondComponent,
    JavaComponent,
    WebComponent,
    Component1Component,
    Component2Component,
    CorejavatechnologiesComponent,
    AdvancejavatechnologiesComponent,
    ReactformsComponent,
    
    
    
  ],
  imports: [
    BrowserModule,Ng2SearchPipeModule,FormsModule,HttpClientModule,TechRoutingModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
