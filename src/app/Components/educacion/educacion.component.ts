
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/Interface/EducacionInterface';
import { EducacionService } from 'src/app/Service/educacion.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  fechaIni = new Date();
  fechaFin = new Date();
  educacio!:FormGroup;

  
  constructor(private educacionS: EducacionService, config: NgbModalConfig,
    private modalService: NgbModal, private form: FormBuilder,private route:Router) {
    config.backdrop = 'static';
    config.keyboard = false;

  }
 
  educacion: Educacion[] = [];
  educa: Educacion = new Educacion(0, "", "", "", this.fechaIni, this.fechaFin);
  // modal: boolean = false;
  ngOnInit(): void {
    this.educacionS.getEducacion().subscribe(data => this.educacion = data);
  this.educacio = this.form.group({
    id:[],
    nombre: ['', Validators.required],
    fechaIni: ['', Validators.required],
    fechaFin: ['', Validators.required],
    descripcion: ['', Validators.required],
    titulo: ['', Validators.required],
  })
  
  }
  openEdit(targetModal: any, educa: Educacion) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
    this.educacio.patchValue({
      id:educa.id,
      nombre: educa.nombre,
      descripcion: educa.descripcion,
      titulo: educa.titulo,
      fechaIni: educa.fechaIni,
      fechaFin: educa.fechaFin

    });
    console.log(this.educacio.value.id)
  }
enviar(){
 
  // console.log(this.educacio.id.value)
  this.educacionS.actualizar(this.educacio.value).subscribe(res=>{this.educa=res,
    this.ngOnInit()
   } );
  this.modalService.dismissAll();
}


}
