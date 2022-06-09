import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../Interface/EducacionInterface';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  constructor(private http:HttpClient) { }
  
 
  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>( "http://localhost:8080/educacion/traer");
  }
   agregar(educacion:Educacion){
     return this.http.post<Educacion>("http://localhost:8080/educacion/crear",educacion);
  }
  //  actualizar(skill:Skill){
  //   return this.http.put<Skill>(`http://localhost:8080/tecnologia/editar/${skill.id}`,Skill);
  //   }
  //   getPorId(id:number){
  //     return this.http.get<Skill>(`http://localhost:8080/tecnologia/traer/${id}`);
  //    }
     

}
