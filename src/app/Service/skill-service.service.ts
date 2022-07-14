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
  return this.http.get<Skill[]>( "https://porfoliobeto.herokuapp.com/tecnologia/traer");
}
agregar(skill:Skill){
  return this.http.post<Skill>("https://porfoliobeto.herokuapp.com/tecnologia/crear",skill);
 }
 actualizar(skill:Skill){
  return this.http.put<Skill>(`https://porfoliobeto.herokuapp.com/tecnologia/editar/${skill.id}`,skill);
  }
  getPorId(id:number){
    return this.http.get<Skill>(`https://porfoliobeto.herokuapp.com/tecnologia/traer/${id}`);
   }
   
   agregarBack(skill:Skill){
    return this.http.post<Skill>("https://porfoliobeto.herokuapp.com/tecnologia/back/crear",skill);
   }
   public getSkillBack():Observable<Skill[]>{
    return this.http.get<Skill[]>( "https://porfoliobeto.herokuapp.com/tecnologia/back/crear");
  }


}
