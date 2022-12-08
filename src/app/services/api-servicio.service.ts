import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServicioService {

  constructor(public http: HttpClient) { }


  getdata <T>(url:string){
    url='https://634c79d3317dc96a3098f96a.mockapi.io/calendario_festivo'
    return this.http.get<T[]>(url);

  }
   
  
}
