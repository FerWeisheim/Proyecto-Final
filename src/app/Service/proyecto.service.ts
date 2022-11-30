import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../Interface/ProyectoInterface';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http:HttpClient) { }

  public getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>( "backenp-portfolio-production.up.railway.app/proyecto/traer");
  }
   agregar(proyecto:Proyecto){
     return this.http.post<Proyecto>("backenp-portfolio-production.up.railway.app/proyecto/crear",proyecto);
  }
  actualizar(proyecto:Proyecto){
     return this.http.put<Proyecto>(`backenp-portfolio-production.up.railway.app/proyecto/editar/${proyecto.id}`,proyecto);
     }
    getPorId(id:number){
       return this.http.get<Proyecto>(`backenp-portfolio-production.up.railway.app/proyecto/traer/${id}`);
   }
    BorrarPorId(id:number){
       return this.http.delete<Proyecto>(`backenp-portfolio-production.up.railway.app/proyecto/borrar/${id}`);
   }
     

}

