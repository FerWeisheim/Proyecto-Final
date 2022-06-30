import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { NgbModalConfig,NgbModal,ModalDismissReasons,  } from '@ng-bootstrap/ng-bootstrap';

import { Educacion } from 'src/app/Interface/EducacionInterface';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-educacion-editar',
  templateUrl: './educacion-editar.component.html',
  styleUrls: ['./educacion-editar.component.css']
})

export class EducacionEditarComponent implements OnInit {
  // fechaIni = new Date();
  // fechaFin = new Date();

  educa:Educacion = new Educacion(0,"","","","","" );
  
  constructor(private form:FormBuilder,private eduser:EducacionService,private route:Router,
              config: NgbModalConfig,private modalService: NgbModal) {
                let id = localStorage.getItem("id");
                this.eduser.getPorId(+id!).subscribe(data=>this.educa=data)
                config.backdrop = 'static';
                config.keyboard = false;
                this.educacion.patchValue({
                  nombre:this.educa.nombre,
                  descripcion:this.educa.descripcion,
                  titulo:this.educa.titulo,
                  fechaIni:this.educa.fechaIni,
                  fechaFin:this.educa.fechaFin
               
                })
              console.log(this.educa.nombre)
              }

  
  educacion:FormGroup=this.form.group({
    nombre:['',Validators.required],
    fechaIni:['', Validators.required],
    fechaFin:['', Validators.required],
    descripcion:['', Validators.required],
    titulo:['', Validators.required],
    })
  ngOnInit(): void {
    
 
 
  }

  enviar(){
   
   }
}
