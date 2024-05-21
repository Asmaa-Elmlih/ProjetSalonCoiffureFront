import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceClient } from '../list-client/list-client.component';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = "http://localhost:8080/"

  constructor(private http:HttpClient) { }


 getAll(page:number,size:number){
    return this.http.get<InterfaceClient[]>(`${this.baseUrl}client?page=${page}&size=${size}`);
  }
 
  getById(id:any){
    return this.http.get<InterfaceClient>(`${this.baseUrl}`+'client/'+`${id}`)
  }
  add(client:InterfaceClient){
    debugger
    return this.http.post<InterfaceClient>(`${this.baseUrl}`+'client',client);
  }
  update(id:any,client:InterfaceClient){
    return this.http.put<InterfaceClient>(`${this.baseUrl}`+'client/'+`${id}`,client)
  }
  delete(id:any){
    return this.http.delete<InterfaceClient>(`${this.baseUrl}`+'client/'+`${id}`)
  }
  findByMotCle(motCle: string) {
    return this.http.get<InterfaceClient[]>(`${this.baseUrl}client/filter?motCle=${motCle}`, {});
  }
}
