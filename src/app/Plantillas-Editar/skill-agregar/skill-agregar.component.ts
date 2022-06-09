import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SkillServiceService} from 'src/app/Service/skill-service.service'
import { Skill } from 'src/app/Interface/SkilInterface';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-skill-agregar',
  templateUrl: './skill-agregar.component.html',
  styleUrls: ['./skill-agregar.component.css']
})
export class SkillAgregarComponent implements OnInit {
// contacto:Contacto = new Contacto("",0,"","");
  skill:Skill= new Skill(0,"",0,"");
  a:string="";
  basee:string="";
  constructor(private form:FormBuilder,private skillS:SkillServiceService,private base: DomSanitizer) { }
  skills:FormGroup=this.form.group({
      nombre:['',Validators.required],
     nivel:['', Validators.required],
    img:['',],
     })
  ngOnInit(): void {
    
  }

  

    obtener(e:any){  
       this.skills.get('img')?.setValue(e[0].base64);
    //  this.a =e[0].base64;
    this.skills.value;
    }
    
enviar(){
        this.skillS.agregar(this.skills.value).subscribe(data=>this.skill=data);
  //  console.log(this.a);

    console.log(this.skills.value);
    const formData: FormData = new FormData();
      formData.append('file', this.skills.value);
 }


  
}

