import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../Interface/ExperienciaInterface';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>( "http://localhost:8080/experiencia/traer");
  }
   agregar(experiencia:Experiencia){
     return this.http.post<Experiencia>("http://localhost:8080/experiencia/crear",experiencia);
  }
  actualizar(experiencia:Experiencia){
     return this.http.put<Experiencia>(`http://localhost:8080/experiencia/editar/${experiencia.id}`,experiencia);
     }
    getPorId(id:number){
       return this.http.get<Experiencia>(`http://localhost:8080/experiencia/traer/${id}`);
   }
    BorrarPorId(id:number){
       return this.http.delete<Experiencia>(`http://localhost:8080/experiencia/borrar/${id}`);
   }
     



}
