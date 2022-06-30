import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skillSoft } from '../Interface/SkillSoftInterface';

@Injectable({
  providedIn: 'root'
})
export class SkillSoftService {

  constructor(private http:HttpClient) { }
  
  public getSkill():Observable<skillSoft[]>{
  return this.http.get<skillSoft[]>( "http://localhost:8080/tecnologia/soft/traer");
}
agregar(skill:skillSoft){
  return this.http.post<skillSoft>("http://localhost:8080/tecnologia/soft/crear",skill);
 }
 actualizar(skill:skillSoft){
  return this.http.put<skillSoft>(`http://localhost:8080/tecnologia/soft/editar/${skill.id}`,skill);
  }
  getPorId(id:number){
    return this.http.get<skillSoft>(`http://localhost:8080/tecnologia/soft/traer/${id}`);
   }
   
}
