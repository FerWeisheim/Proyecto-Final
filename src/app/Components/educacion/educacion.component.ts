
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Interface/EducacionInterface';
import { EducacionService } from 'src/app/Service/educacion.service';
import { NgbModalConfig, NgbModal, } from '@ng-bootstrap/ng-bootstrap';
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
  private deleteId:number;
  constructor(private educacionS: EducacionService, config: NgbModalConfig,
    private modalService: NgbModal, private form: FormBuilder,private route:Router,private tokenService:TokenService) {
    config.backdrop = 'static';
    config.keyboard = false;
  
  }
  educacion: Educacion[] = [];
  educa: Educacion = new Educacion(0, "", "", "", "","");

  ngOnInit(): void {
    this.educacionS.getEducacion().subscribe(data => this.educacion = data);
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

  openEdit(targetModal: any, edu: Educacion) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg',
    });
    this.educacio.patchValue({
      id:edu.id,
      nombre: edu.nombre,
      descripcion: edu.descripcion,
      titulo: edu.titulo,
      fechaIni: edu.fechaIni,
      fechaFin: edu.fechaFin
    });
  }


  openDelete(targetModal, edu: Educacion) {
    this.deleteId = edu.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
    });
  }
  onDelete() {
    this.educacionS.deletePorId(this.deleteId)
      .subscribe((resul) => {
        this.educa= resul
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  };


enviar(){
   this.educacionS.actualizar(this.educacio.value).subscribe(res=>{this.educa=res,
    this.ngOnInit()});
   this.modalService.dismissAll();
}


guardar(){
 this.educacionS.agregar(this.educacio.value).subscribe(data=>{this.educa=data,
 this.ngOnInit()});
 this.modalService.dismissAll();
}

}
