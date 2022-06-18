
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/Interface/SkilInterface';
import { SkillServiceService } from 'src/app/Service/skill-service.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills!:FormGroup;
  s:Skill=new Skill(0,"",0,"");
  constructor(private skillS:SkillServiceService,private form:FormBuilder,config: NgbModalConfig,
  private modalService: NgbModal) { }
  skill:Skill[]=[];
  a:string="";
  ngOnInit(): void {
      this.skillS.getSkill().subscribe(data=>this.skill=data);
      this.skills=this.form.group({
        id:[''],
        nombre:['',Validators.required],
        nivel:['', Validators.required],
        img: ['']
       })
  }

  openEdit(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
  }
  obtener(e:any){  
    this.a=e[0].base64;
    }

  guardar(){
  this.skills.value.img=this.a;
  this.skillS.agregar(this.skills.value).subscribe(res=>{this.s=res,
  this.ngOnInit()});
  this.modalService.dismissAll();
  }

  enviar(ski:Skill):void{
    let id= localStorage.setItem("id",ski.id!.toString());
    console.log(id);
   }

}
