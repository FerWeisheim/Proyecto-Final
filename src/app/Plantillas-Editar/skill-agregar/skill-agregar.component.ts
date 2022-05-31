import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';
import {SkillServiceService} from 'src/app/Service/skill-service.service'
import { Skill } from 'src/app/Interface/SkilInterface';

@Component({
  selector: 'app-skill-agregar',
  templateUrl: './skill-agregar.component.html',
  styleUrls: ['./skill-agregar.component.css']
})
export class SkillAgregarComponent implements OnInit {
// contacto:Contacto = new Contacto("",0,"","");
  skill:Skill= new Skill(0,"",0);
  constructor(private form:FormBuilder,private skillS:SkillServiceService) { }
 
  skills:FormGroup=this.form.group({
    nombre:['',Validators.required],
    nivel:['', Validators.required]
    })
  ngOnInit(): void {
    
  }
   enviar(){
    this.skillS.agregar(this.skills.value).subscribe()
 }

}
