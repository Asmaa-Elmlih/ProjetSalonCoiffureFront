import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceSalon } from '../list-salon/list-salon.component';

@Injectable({
  providedIn: 'root'
})
export class SalonService {
  private baseUrl = "http://localhost:8080/"

  constructor(private http:HttpClient) { }


 getAll(page:number,size:number){
    return this.http.get<InterfaceSalon[]>(`${this.baseUrl}salon?page=${page}&size=${size}`);
  }
 
  getById(id:any){
    return this.http.get<InterfaceSalon>(`${this.baseUrl}`+'salon/'+`${id}`)
  }
  add(salon:InterfaceSalon){
    
    return this.http.post<InterfaceSalon>(`${this.baseUrl}`+'salon',salon);
  }
  update(id:any,salon:InterfaceSalon){
    return this.http.put<InterfaceSalon>(`${this.baseUrl}`+'salon/'+`${id}`,salon)
  }
  delete(id:any){
    return this.http.delete<InterfaceSalon>(`${this.baseUrl}`+'salon/'+`${id}`)
  }
  findByMotCle(motCle: string) {
    return this.http.get<InterfaceSalon[]>(`${this.baseUrl}salon/filter?motCle=${motCle}`, {});
  }
}
