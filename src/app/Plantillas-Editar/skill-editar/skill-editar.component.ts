import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skill } from 'src/app/Interface/SkilInterface';
import { SkillServiceService } from 'src/app/Service/skill-service.service';

@Component({
  selector: 'app-skill-editar',
  templateUrl: './skill-editar.component.html',
  styleUrls: ['./skill-editar.component.css']
})
export class SkillEditarComponent implements OnInit {
  skill:Skill= new Skill(0,"",0,"");
 
  constructor(private form : FormBuilder,private skillS:SkillServiceService,private router:Router) { 
     let id =localStorage.getItem("id");
      this.skillS.getPorId(+id!).subscribe(data=> {this.skill=data,console.log(data)});
  }


  skil:FormGroup=this.form.group({
    nombre:['',Validators.required],
    nivel:['', Validators.required],
    
    })
  ngOnInit(): void {
  }
  actualizar(c:Skill){
    this.skillS.actualizar(c).subscribe(data=>{this.skill=data})
    {
    this.router.navigate(['**']);
    }
  }

}
