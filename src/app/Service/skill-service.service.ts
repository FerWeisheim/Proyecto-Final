import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Skill } from '../Interface/SkilInterface';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor(private http:HttpClient) {}
public getSkill():Observable<Skill[]>{
  return this.http.get<Skill[]>( "http://localhost:8080/tecnologia/traer");
}
agregar(skill:Skill){
  return this.http.post<Skill>("http://localhost:8080/tecnologia/crear",skill);
 }
 actualizar(skill:Skill){
  return this.http.put<Skill>(`http://localhost:8080/tecnologia/editar/${skill.id}`,skill);
  }
  getPorId(id:number){
    return this.http.get<Skill>(`http://localhost:8080/tecnologia/traer/${id}`);
   }
   
  deletePorId(id:number){
    return this.http.delete<Skill>(`http://localhost:8080/tecnologia/borrar/${id}`);
   }
   
  //  agregarBack(skill:Skill){
  //   return this.http.post<Skill>("http://localhost:8080/tecnologia/back/crear",skill);
  //  }
  //  public getSkillBack():Observable<Skill[]>{
  //   return this.http.get<Skill[]>( "http://localhost:8080/tecnologia/back/crear");
  // }


}
