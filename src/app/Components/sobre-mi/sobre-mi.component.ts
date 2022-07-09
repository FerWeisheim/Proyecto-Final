import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  constructor(private router:Router,private tokenService:TokenService) { }
  isAdmin:boolean=false;
  roles:string[];
  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();this.roles.forEach(rol => { if (rol === 'ROL_ADMIN') { this.isAdmin = true; }})
  
  }

}
