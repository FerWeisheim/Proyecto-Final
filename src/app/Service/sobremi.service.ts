import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SobreMi } from '../Interface/SobreMiInterface';

@Injectable({
  providedIn: 'root'
})
export class SobremiService {

  constructor(private http:HttpClient) { }

  public getSobreMi():Observable<SobreMi[]>{
  return this.http.get<SobreMi[]>("http://localhost:8080/sobremi/traer")
  }

  agregar(sobremi:SobreMi){
    return this.http.post<SobreMi>("http://localhost:8080/sobremi/crear",sobremi);
  }
  actualizar(sobremi:SobreMi){
    return this.http.put<SobreMi>(`http://localhost:8080/sobremi/editar/${sobremi.id}`,sobremi);
  }
  
  getPorId(id:number){
    return this.http.get<SobreMi>(`http://localhost:8080/sobremi/traer/${id}`);
   }

  deletePorId(id:number){
    return this.http.delete<SobreMi>(`http://localhost:8080/sobremi/borrar/${id}`);
   }


}
