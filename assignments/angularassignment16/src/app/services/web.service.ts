import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  baseUrl:any='assets/JSON/web.json'
  constructor(private http:HttpClient) { }
  getProductsInfo():Observable<any>{
    return this.http.get(this.baseUrl)
  }
}
