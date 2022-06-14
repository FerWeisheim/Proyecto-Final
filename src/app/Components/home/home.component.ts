import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Interface/PersonaInterface';
import { PersonaServiceService } from 'src/app/Service/persona-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private personaService:PersonaServiceService) { }
persona:Persona[]=[];
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>this.persona=data);
  }

  editar(per:Persona){
    
    let id= localStorage.setItem("id",per.id!.toString());
  }
}
