
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Interface/EducacionInterface';
import { EducacionService } from 'src/app/Service/educacion.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/Service/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  // fechaIni = new Date();
  // fechaFin = new Date();
  educacio!:FormGroup;

  isAdmin=false;
  roles:string[];
  constructor(private educacionS: EducacionService, config: NgbModalConfig,
    private modalService: NgbModal, private form: FormBuilder,private route:Router,private tokenService:TokenService) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.educacionS.getEducacion().subscribe(data => this.educacion = data);
  }
  educacion: Educacion[] = [];
  educa: Educacion = new Educacion(0, "", "", "", "","");
  ngOnInit(): void {
  this.educacio = this.form.group({
    id:[],
    nombre: ['', Validators.required],
    fechaIni: ['', Validators.required],
    fechaFin: ['', Validators.required],
    descripcion: ['', Validators.required],
    titulo: ['', Validators.required],
  }),
  this.roles = this.tokenService.getAuthorities();this.roles.forEach(rol => { if (rol === 'ROL_ADMIN') { this.isAdmin = true; }})
  }

  openEducacion(targetModal: any) {
    this.educacio.reset();
    this.modalService.dismissAll();
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
  }

  openEdit(targetModal: any, educa: Educacion) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    this.educacio.patchValue({
      id:educa.id,
      nombre: educa.nombre,
      descripcion: educa.descripcion,
      titulo: educa.titulo,
      fechaIni: educa.fechaIni,
      fechaFin: educa.fechaFin
    });
    // console.log(this.educacio.value)
  }

enviar(){
   console.log(this.educacio.value)
   this.educacionS.actualizar(this.educacio.value).subscribe(res=>{this.educa=res,
    this.ngOnInit();});
   this.modalService.dismissAll();
}


guardar(){
 console.log(this.educacio.value)
 this.educacionS.agregar(this.educacio.value).subscribe(data=>{this.educa=data,
 this.ngOnInit()});
 this.modalService.dismissAll();
}

}
