import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contacto } from '../Interface/ContactoInterface';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ContactoServiceService {

  constructor(private http: HttpClient) { }

  public getContacto():Observable<Contacto[]>{
    return this.http.get<Contacto[]>( "http://localhost:8080/contacto/traer");
}

agregar(contacto:Contacto){
 return this.http.post<Contacto>("http://localhost:8080/contacto/crear",contacto);
}

actualizar(contacto:Contacto){
return this.http.put<Contacto>(`http://localhost:8080/contacto/editar/${contacto.id}`,contacto);
}

getPorId(id:number){
 return this.http.get<Contacto>(`http://localhost:8080/contacto/traer/perfil/${id}`);
}

deletePorId(id:number){
 return this.http.delete<Contacto>(`http://localhost:8080/contacto/borrar/${id}`);
}
}
