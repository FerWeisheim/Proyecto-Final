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
  return this.http.get<SobreMi[]>("backenp-portfolio-production.up.railway.app/sobremi/traer")
  }

  agregar(sobremi:SobreMi){
    return this.http.post<SobreMi>("backenp-portfolio-production.up.railway.app/sobremi/crear",sobremi);
  }
  actualizar(sobremi:SobreMi){
    return this.http.put<SobreMi>(`backenp-portfolio-production.up.railway.app/sobremi/editar/${sobremi.id}`,sobremi);
  }
  
  getPorId(id:number){
    return this.http.get<SobreMi>(`backenp-portfolio-production.up.railway.app/sobremi/traer/${id}`);
   }

  deletePorId(id:number){
    return this.http.delete<SobreMi>(`backenp-portfolio-production.up.railway.app/sobremi/borrar/${id}`);
   }


}
