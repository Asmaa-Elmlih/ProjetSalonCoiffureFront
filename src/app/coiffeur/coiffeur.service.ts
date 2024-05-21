import { Injectable } from '@angular/core';
import { InterfaceCoiffeur } from './list-coiffeur/list-coiffeur.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoiffeurService {

  private baseUrl = "http://localhost:8080/"

  constructor(private http:HttpClient) { }


 getAll(page:number,size:number){
    return this.http.get<InterfaceCoiffeur[]>(`${this.baseUrl}coiffeur?page=${page}&size=${size}`);
  }
 
  getById(id:any){
    return this.http.get<InterfaceCoiffeur>(`${this.baseUrl}`+'coiffeur/'+`${id}`)
  }
  add(client:InterfaceCoiffeur){
    debugger
    return this.http.post<InterfaceCoiffeur>(`${this.baseUrl}`+'coiffeur',client);
  }
  update(id:any,client:InterfaceCoiffeur){
    return this.http.put<InterfaceCoiffeur>(`${this.baseUrl}`+'coiffeur/'+`${id}`,client)
  }
  delete(id:any){
    return this.http.delete<InterfaceCoiffeur>(`${this.baseUrl}`+'coiffeur/'+`${id}`)
  }
  findByMotCle(motCle: string) {
    return this.http.get<InterfaceCoiffeur[]>(`${this.baseUrl}coiffeur/filter?motCle=${motCle}`, {});
  }
}
