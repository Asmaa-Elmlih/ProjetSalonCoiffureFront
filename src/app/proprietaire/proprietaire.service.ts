import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceProprietaire } from './list-proprietaire/list-proprietaire.component';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {
  private baseUrl = "http://localhost:8080/"

  constructor(private http:HttpClient) { }


 getAll(page:number,size:number){
    return this.http.get<InterfaceProprietaire[]>(`${this.baseUrl}proprietaire?page=${page}&size=${size}`);
  }
 
  getById(id:any){
    return this.http.get<InterfaceProprietaire>(`${this.baseUrl}`+'proprietaire/'+`${id}`)
  }
  add(proprietaire:InterfaceProprietaire){
    debugger
    return this.http.post<InterfaceProprietaire>(`${this.baseUrl}`+'proprietaire',proprietaire);
  }
  update(id:any,proprietaire:InterfaceProprietaire){
    return this.http.put<InterfaceProprietaire>(`${this.baseUrl}`+'proprietaire/'+`${id}`,proprietaire)
  }
  delete(id:any){
    return this.http.delete<InterfaceProprietaire>(`${this.baseUrl}`+'proprietaire/'+`${id}`)
  }
  findByMotCle(motCle: string) {
    return this.http.get<InterfaceProprietaire[]>(`${this.baseUrl}proprietaire/filter?motCle=${motCle}`, {});
  }
}
