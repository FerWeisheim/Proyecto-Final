
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Skill } from 'src/app/Interface/SkilInterface';
import { SkillServiceService } from 'src/app/Service/skill-service.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { skillBack } from 'src/app/Interface/SkillBackInterface';
import { SkillBackService } from 'src/app/Service/skill-back-.service';
import { SkillSoftService } from 'src/app/Service/skill-soft.service';
import { TokenService } from 'src/app/Service/token.service';
import { skillSoft } from 'src/app/Interface/SkillSoftInterface';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skills!:FormGroup;
  skilback!:FormGroup;

  s:Skill=new Skill(0,"",0,"");
  b:skillBack = new skillBack(0,"",0,"");
  soft:skillSoft = new skillSoft(0,"",0,"");
  constructor(private skillS:SkillServiceService,private form:FormBuilder,config: NgbModalConfig,
  private modalService: NgbModal,private skillbackS: SkillBackService,private skillSo:SkillSoftService,private tokenService:TokenService) { }
  skill:Skill[]=[];
  skillBack:Skill[]=[];
  skillSoft:Skill[]=[];
  a:string="";
  isAdmin=false;
  roles:string[];
  private deleteId:number;
  private deleteIdBack:number;
  ngOnInit(): void {
      this.skillS.getSkill().subscribe(data=>this.skill=data);
      this.skillbackS.getSkill().subscribe(data=>this.skillBack=data);
      this.skillSo.getSkill().subscribe(data=>this.skillSoft=data);

      // formulario front
      this.skills=this.form.group({
        id:[''],
        nombre:['',Validators.required],
        nivel:['', Validators.required],
        img: ['']
       }),
       this.roles = this.tokenService.getAuthorities();this.roles.forEach(rol => { if (rol === 'ROL_ADMIN') { this.isAdmin = true; }})
    }
    
  openEdit(targetModal: any) {
    
    this.skills.reset();
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
  }
  
  // formulario para el front 
  openSkil(targetModal: any, ski: Skill) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
    this.skills.patchValue({
      id:ski.id,
      nombre:ski.nombre,
      nivel:ski.nivel,
      img:ski.img,

    });
    // console.log(this.cont.value.id)
  }


  // formulario para el back
  openBack(targetModal: any) {
    this.skills.reset();
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
  }


  // openBack(targetModal: any, ski: skillBack) {
  //   this.modalService.open(targetModal, {
  //     centered: true,
  //     backdrop: 'static',
  //     size: 'lg'
  
  //   });
  //   this.skills.patchValue({
  //     id:ski.id,
  //     nombre:ski.nombre,
  //     nivel:ski.nivel,
  //     img:ski.img,

  //   });
  //   // console.log(this.cont.value.id)
  // }



  obtener(e:any){  
    this.a=e[0].base64;
    this.skills.value.img=this.a;
    }
  // FRONT-END

  guardar(){
  
  this.skillS.agregar(this.skills.value).subscribe(res=>{this.s=res,
  this.ngOnInit()});
  this.modalService.dismissAll();
  }

  actualizar(){

  this.skillS.actualizar(this.skills.value).subscribe(data=>{this.s=data,
  this.ngOnInit()});
  this.modalService.dismissAll();
  console.log(this.skills.value)

   }
// BACK-END


guardarback(){

  this.skillbackS.agregar(this.skills.value).subscribe(data=>{this.b=data,
  this.ngOnInit()});
  this.modalService.dismissAll();

}

actualizarback(){

  this.skillbackS.actualizar(this.skills.value).subscribe(data=>{this.s=data,
  this.ngOnInit()});
  this.modalService.dismissAll();
  console.log(this.skills.value)

   }

// soft


guardarsoft(){

  this.skillSo.agregar(this.skills.value).subscribe(data=>{this.b=data,
  this.ngOnInit()});
  this.modalService.dismissAll();

}

actualizarsoft(){

  this.skillSo.actualizar(this.skills.value).subscribe(data=>{this.s=data,
  this.ngOnInit()});
  this.modalService.dismissAll();
  console.log(this.skills.value)

   }
  //  modal para borrar skill front
   openDelete(targetModal, ski: Skill) {
    this.deleteId = ski.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
    });
  }
  onDelete() {

    this.skillS.deletePorId(this.deleteId)
      .subscribe((resul) => {
        this.s= resul
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  };

  // modal para borrar skill back
  Deleteback(targetModal, skiback: skillBack) {
    this.deleteId = skiback.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
    });
  }
  DeleteBack() {

    this.skillbackS.deletePorId(this.deleteId)
      .subscribe((resul) => {
        this.b= resul
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  };

  // modal para borrar soft skill

  Deletesoft(targetModal, skisof: skillSoft) {
    this.deleteId = skisof.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
    });
  }
  DeleteSoft() {

    this.skillSo.DeletePorId(this.deleteId)
      .subscribe((resul) => {
        this.soft= resul
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  };

  



}
