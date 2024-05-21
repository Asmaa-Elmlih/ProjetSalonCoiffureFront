import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceService } from './list-service-class/list-service-class.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceClassService {
  private baseUrl = "http://localhost:8080/"

  constructor(private http:HttpClient) { }


 getAll(page:number,size:number){
    return this.http.get<InterfaceService[]>(`${this.baseUrl}service?page=${page}&size=${size}`);
  }
 
  getById(id:any){
    return this.http.get<InterfaceService>(`${this.baseUrl}`+'service/'+`${id}`)
  }
  add(service:InterfaceService){
    
    return this.http.post<InterfaceService>(`${this.baseUrl}`+'service',service);
  }
  update(id:any,service:InterfaceService){
    return this.http.put<InterfaceService>(`${this.baseUrl}`+'service/'+`${id}`,service)
  }
  delete(id:any){
    return this.http.delete<InterfaceService>(`${this.baseUrl}`+'service/'+`${id}`)
  }
  findByMotCle(motCle: string) {
    return this.http.get<InterfaceService[]>(`${this.baseUrl}service/filter?motCle=${motCle}`, {});
  }
}
