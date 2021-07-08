import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { SortingPipe } from './pipes/sorting.pipe';


@NgModule({
  declarations: [SearchPipe,SortingPipe],
  imports: [
    CommonModule
  ],
  exports :[SearchPipe,SortingPipe]
})
export class SharedModule { }
