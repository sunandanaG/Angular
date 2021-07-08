import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {
  
  transform(value:any,args:any){
    if(args=='low') {

      return value.sort((a:any,b:any) => (a.productprice < b.productprice)? -1 : 1)
      
     }
     else if(args=='high') {
       return value.sort((a:any,b:any) => (a.productprice > b.productprice)? -1 : 1)
      
    }
    else if(args=='a-z') {
      return value.sort((a:any,b:any) => (a.productname < b.productname)? -1 : 1)
      
     }
     else if(args=='z-a') {
      return value.sort((a:any,b:any) => (a.productname > b.productname)? -1 : 1)
     
   }

  }
}