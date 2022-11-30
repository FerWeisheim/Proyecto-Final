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
    return this.http.get<Educacion[]>( "backenp-portfolio-production.up.railway.app/educacion/traer");
  }
   agregar(educacion:Educacion){
     return this.http.post<Educacion>("backenp-portfolio-production.up.railway.app/educacion/crear",educacion);
  }
  actualizar(educacion:Educacion){
     return this.http.put<Educacion>(`backenp-portfolio-production.up.railway.app/educacion/editar/${educacion.id}`,educacion);
     }
    getPorId(id:number){
       return this.http.get<Educacion>(`backenp-portfolio-production.up.railway.app/educacion/traer/${id}`);
   }
    deletePorId(id:number){
       return this.http.delete<Educacion>(`backenp-portfolio-production.up.railway.app/educacion/borrar/${id}`);
   }
     

}
