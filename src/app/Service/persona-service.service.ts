import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../Interface/PersonaInterface';

@Injectable({
  providedIn: 'root'
})
export class PersonaServiceService {

  constructor(private http:HttpClient) { }
  
  getPersona():Observable<Persona[]>{
    return this.http.get<Persona[]>("http://localhost:8080/personas/traer");
  }
agregar(persona:Persona){
  return this.http.post<Persona>("http://localhost:8080/persona/crear",persona);
 }
 getPorId(id:number){
  return this.http.get<Persona>(`http://localhost:8080/persona/traer/${id}`);
 }
 actualizar(persona:Persona){
  return this.http.put<Persona>(`http://localhost:8080/persona/editar/${persona.id}`,persona);
  }
}


