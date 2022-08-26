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
    return this.http.get<Proyecto[]>( "https://porfoliobeto.herokuapp.com/proyecto/traer");
  }
   agregar(proyecto:Proyecto){
     return this.http.post<Proyecto>("https://porfoliobeto.herokuapp.com/proyecto/crear",proyecto);
  }
  actualizar(proyecto:Proyecto){
     return this.http.put<Proyecto>(`https://porfoliobeto.herokuapp.com/proyecto/editar/${proyecto.id}`,proyecto);
     }
    getPorId(id:number){
       return this.http.get<Proyecto>(`https://porfoliobeto.herokuapp.com/proyecto/traer/${id}`);
   }
    BorrarPorId(id:number){
       return this.http.delete<Proyecto>(`https://porfoliobeto.herokuapp.com/proyecto/borrar/${id}`);
   }
     

}

