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

  return this.http.get<skillBack[]>( "backenp-portfolio-production.up.railway.app/tecnologia/back/traer");
}
agregar(skill:skillBack){
  return this.http.post<skillBack>("backenp-portfolio-production.up.railway.app/tecnologia/back/crear",skill);
 }
 actualizar(skill:skillBack){
  return this.http.put<skillBack>(`backenp-portfolio-production.up.railway.app/tecnologia/back/editar/${skill.id}`,skill);
  }
  getPorId(id:number){
    return this.http.get<skillBack>(`backenp-portfolio-production.up.railway.app/tecnologia/back/traer/${id}`);
   }
   
   deletePorId(id:number){
    return this.http.delete<skillBack>(`backenp-portfolio-production.up.railway.app/tecnologia/back/borrar/${id}`);
   }
   

}
