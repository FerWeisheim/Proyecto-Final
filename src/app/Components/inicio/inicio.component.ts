import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  isLogged:boolean=false;
  
  constructor(private tokenService:TokenService,private route:Router){
   
  }

ngOnInit() {
  if(this.tokenService.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged=false;
  }
}

  salir(){
    window.sessionStorage.clear();
    location.reload();
  }
}
