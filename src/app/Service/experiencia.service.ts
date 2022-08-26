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
    return this.http.get<Experiencia[]>( "https://porfoliobeto.herokuapp.com/experiencia/traer");
  }
   agregar(experiencia:Experiencia){
     return this.http.post<Experiencia>("https://porfoliobeto.herokuapp.com/experiencia/crear",experiencia);
  }
  actualizar(experiencia:Experiencia){
     return this.http.put<Experiencia>(`https://porfoliobeto.herokuapp.com/experiencia/editar/${experiencia.id}`,experiencia);
     }
    getPorId(id:number){
       return this.http.get<Experiencia>(`https://porfoliobeto.herokuapp.com/experiencia/traer/${id}`);
   }
    BorrarPorId(id:number){
       return this.http.delete<Experiencia>(`https://porfoliobeto.herokuapp.com/experiencia/borrar/${id}`);
   }
     



}
