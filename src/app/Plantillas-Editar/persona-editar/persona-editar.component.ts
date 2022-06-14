import { i18nMetaToJSDoc } from '@angular/compiler/src/render3/view/i18n/meta';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Interface/PersonaInterface';
import { PersonaServiceService } from 'src/app/Service/persona-service.service';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent implements OnInit {
persona:Persona = new Persona (0,"","","","");

  constructor(private personaS:PersonaServiceService, private form: FormBuilder) { }
  base:string="";
  personaa:FormGroup=this.form.group({
    nombre:['',Validators.required],
    apellido:['', Validators.required],
    titulo:['', Validators.required],
    img:[''],
    })
  ngOnInit(): void {
    let id =localStorage.getItem("id");
    this.personaS.getPorId(+id!).subscribe(data=> {this.persona=data});
  }

  obtener(e:any){
    this.base=e[0].base64;
    this.persona.img=e[0].base64;
  }
  enviar(p:Persona){
  p.img=this.base;
    this.personaS.actualizar(p).subscribe(data=>this.persona=data);
   console.log (this.persona.img)
  }
 
}
