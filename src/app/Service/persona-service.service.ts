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
    return this.http.get<Persona[]>("https://porfoliobeto.herokuapp.com/personas/traer");
  }
agregar(persona:Persona){
  return this.http.post<Persona>("https://porfoliobeto.herokuapp.com/persona/crear",persona);
 }
 getPorId(id:number){
  return this.http.get<Persona>(`https://porfoliobeto.herokuapp.com/persona/traer/${id}`);
 }
 actualizar(persona:Persona){
  return this.http.put<Persona>(`https://porfoliobeto.herokuapp.com/persona/editar/${persona.id}`,persona);
  }
}


