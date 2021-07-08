import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  
  transform(value:any,args:any){
    if(args=='low') {

      return value.sort((a:any,b:any) => (a.courseprice < b.courseprice)? -1 : 1)
      
     }
     else if(args=='high') {
       return value.sort((a:any,b:any) => (a.courseprice > b.courseprice)? -1 : 1)
      
    }
    else if(args=='a-z') {
      return value.sort((a:any,b:any) => (a.coursename < b.coursename)? -1 : 1)
      
     }
     else if(args=='z-a') {
      return value.sort((a:any,b:any) => (a.coursename > b.coursename)? -1 : 1)
     
   }

  }
}