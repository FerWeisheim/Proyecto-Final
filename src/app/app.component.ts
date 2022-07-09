
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { TokenService } from './Service/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'PortafolioRouting'
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
    }
}
