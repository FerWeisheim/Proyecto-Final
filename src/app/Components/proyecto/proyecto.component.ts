import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/Interface/ProyectoInterface';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})

export class ProyectoComponent implements OnInit {
  proyecto: FormGroup;
  Proyecto:Proyecto[]=[];

 
  constructor(private form:FormBuilder,private http:HttpClient,private modalService: NgbModal) { }

  ngOnInit(): void {
  
    this.proyecto=this.form.group({
    id:['',Validators.required],
    proyecto:['',Validators.required],
    descripcion:['',Validators.required],
    urlCodeSource:['',Validators.required],
    })
  }
  openEdit(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
  }

  openProyect(targetModal: any, pro: Proyecto) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
    this.proyecto.patchValue({
      id:pro.id,
      proyect:pro.proyecto,
      descrip:pro.descripcion,
      url:pro.urlSourceCode,

    });
  
  }
  guardar(){

  }


}
