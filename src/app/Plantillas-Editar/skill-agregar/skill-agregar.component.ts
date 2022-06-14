import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {SkillServiceService} from 'src/app/Service/skill-service.service'
import { Skill } from 'src/app/Interface/SkilInterface';




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
  constructor(private form:FormBuilder,private skillS:SkillServiceService) { }
  
  skills:FormGroup=this.form.group({
      nombre:['',Validators.required],
     nivel:['', Validators.required],
    img:[],
     })
  ngOnInit(): void {
    
  }

  

    obtener(e:any){  
       
       this.skill.img=e[0].base64
    //  this.a =e[0].base64;
    // this.skills.value;
    // this.skills.get('img')?.setValue(this.a);
    }
    
enviar(){
  // this.skill.img=this.a;
  this.skillS.agregar(this.skills.value).subscribe(data=>this.skill=data);
  // this.skillS.agregar(this.skills.value).subscribe(data=>this.skill=data);
    console.log(this.skill.img);
 }


  
}

