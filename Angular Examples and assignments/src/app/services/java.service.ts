import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class JavaService {

  baseUrl:any='assets/JSON/java.json'
  constructor(private http:HttpClient) { }
  getProductsInfo():Observable<any>{
    return this.http.get(this.baseUrl)
  }
}
