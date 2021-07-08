import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  customers:any=[];
  private behaviorSubj = new BehaviorSubject(this.customers)

  currentMsg = this.behaviorSubj.asObservable()
  
  changeData(data:any){



    console.log(data)

    this.behaviorSubj.value.push(data)

  }
}


