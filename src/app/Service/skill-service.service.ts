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
  return this.http.get<Skill[]>( "backenp-portfolio-production.up.railway.app/tecnologia/traer");
}
agregar(skill:Skill){
  return this.http.post<Skill>("backenp-portfolio-production.up.railway.app/tecnologia/crear",skill);
 }
 actualizar(skill:Skill){
  return this.http.put<Skill>(`backenp-portfolio-production.up.railway.app/tecnologia/editar/${skill.id}`,skill);
  }
  getPorId(id:number){
    return this.http.get<Skill>(`backenp-portfolio-production.up.railway.app/tecnologia/traer/${id}`);
   }
   
  deletePorId(id:number){
    return this.http.delete<Skill>(`backenp-portfolio-production.up.railway.app/tecnologia/borrar/${id}`);
   }
   
  //  agregarBack(skill:Skill){
  //   return this.http.post<Skill>("http://localhost:8080/tecnologia/back/crear",skill);
  //  }
  //  public getSkillBack():Observable<Skill[]>{
  //   return this.http.get<Skill[]>( "http://localhost:8080/tecnologia/back/crear");
  // }


}
