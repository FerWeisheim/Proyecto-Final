import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skillBack } from '../Interface/SkillBackInterface';

@Injectable({
  providedIn: 'root'
})
export class SkillBackService {

  constructor(private http:HttpClient) {}



  public getSkill():Observable<skillBack[]>{

  return this.http.get<skillBack[]>( "http://localhost:8080/tecnologia/back/traer");
}
agregar(skill:skillBack){
  return this.http.post<skillBack>("http://localhost:8080/tecnologia/back/crear",skill);
 }
 actualizar(skill:skillBack){
  return this.http.put<skillBack>(`http://localhost:8080/tecnologia/back/editar/${skill.id}`,skill);
  }
  getPorId(id:number){
    return this.http.get<skillBack>(`http://localhost:8080/tecnologia/back/traer/${id}`);
   }
   
   deletePorId(id:number){
    return this.http.delete<skillBack>(`http://localhost:8080/tecnologia/back/borrar/${id}`);
   }
   

}
