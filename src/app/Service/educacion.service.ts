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
  actualizar(educacion:Educacion){
     return this.http.put<Educacion>(`http://localhost:8080/educacion/editar/${educacion.id}`,educacion);
     }
    getPorId(id:number){
       return this.http.get<Educacion>(`http://localhost:8080/educacion/traer/${id}`);
   }
     

}
