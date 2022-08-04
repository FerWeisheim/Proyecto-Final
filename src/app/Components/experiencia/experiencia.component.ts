
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/Interface/ExperienciaInterface';
import { ExperienciaService } from 'src/app/Service/experiencia.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  isAdmin=false;
  roles:string[];
  experienciaFormulario!:FormGroup;

  experiencia:Experiencia[]=[];
  Experiencia:Experiencia = new Experiencia(0,"","","","","");
  constructor(private ExperienciaService: ExperienciaService,config: NgbModalConfig,
    private modalService: NgbModal, private form: FormBuilder,private route:Router,private tokenService:TokenService) {
      config.backdrop = 'static';
      config.keyboard = false;
    
    }
    ngOnInit(): void {
      this.ExperienciaService.getEducacion().subscribe(res=>{this.experiencia=res});
    this.experienciaFormulario = this.form.group({
    id:[],
    empresa:['',Validators.required],
    puesto:['',Validators.required],
    descripcion:['',Validators.required],
    fechaIni:['',Validators.required],
    fechaFin:['',Validators.required],
    })
    this.roles=this.tokenService.getAuthorities();
    this.roles.forEach(rol=> {if(rol==='ROL_ADMIN'){this.isAdmin=true;} })
    }
      
    // funciones del modal
    openExperiencia(targetModal: any) {
      this.experienciaFormulario.reset();
      this.modalService.dismissAll();
      this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static',
        size: 'lg'
      });
    }

    


    openEdit(targetModal: any, expe:Experiencia ) {
      this.modalService.open(targetModal, {
        centered: true,
        backdrop: 'static',
        size: 'lg',
      });
      this.experienciaFormulario.patchValue({
        id:expe.id,
        empresa:expe.empresa,
        descripcion: expe.descripcion,
        puesto:expe.puesto,
        fechaIni: expe.fechaIni,
        fechaFin: expe.fechaFin
      });
      // console.log(this.educacio.value)
    }
  
// ============================





guardar(){
  console.log(this.experienciaFormulario.value);
  this.ExperienciaService.agregar(this.experienciaFormulario.value).subscribe(res=>{this.Experiencia=res,this.ngOnInit()
  });
  this.modalService.dismissAll()
}

actualizar(){
  this.ExperienciaService.actualizar(this.experienciaFormulario.value).subscribe(res=>{this.Experiencia=res,this.ngOnInit();});
this.modalService.dismissAll();
}
}
