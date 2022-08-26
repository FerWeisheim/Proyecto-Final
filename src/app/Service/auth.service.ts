import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { NuevoUsuario } from '../Interface/Nuevo-Usuario';

import { JWT_DTO } from '../Interface/Jwt-DtO';
import { LoginUsuario } from '../Interface/Login-Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // https://porfoliobeto.herokuapp.com
  constructor(private http:HttpClient) { }

   public nuevo(registro: NuevoUsuario):Observable<any>{
    return this.http.post<any>("https://porfoliobeto.herokuapp.com/auth/nuevo",registro);
   }
   public login(login: LoginUsuario):Observable<JWT_DTO>{
    return this.http.post<any>("https://porfoliobeto.herokuapp.com/auth/login",login);
   }
}
