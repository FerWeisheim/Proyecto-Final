import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Interface/PersonaInterface';
import { PersonaServiceService } from 'src/app/Service/persona-service.service';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent implements OnInit {
persona:Persona = new Persona (0,"","","","");
  constructor(private personaS:PersonaServiceService) { }
  base:string="";
  ngOnInit(): void {
  }

  obtener(e:any){
    this.persona.img=e[0].base64;
  }
  enviar(){
    this.personaS.agregar(this.persona).subscribe(data=>this.persona=data);
   console.log (this.persona.img)
  }
}
