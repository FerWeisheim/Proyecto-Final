import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Educacion } from 'src/app/Interface/EducacionInterface';
import { EducacionService } from 'src/app/Service/educacion.service';

@Component({
  selector: 'app-educacion-agregar',
  templateUrl: './educacion-agregar.component.html',
  styleUrls: ['./educacion-agregar.component.css']
})
export class EducacionAgregarComponent implements OnInit {
  // fechaIni = new Date();
  // fechaFin = new Date();
  educa:Educacion = new Educacion(0,"","","","","" );
  constructor(private form:FormBuilder,private educacionS:EducacionService) { }
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
    this.educacionS.agregar(this.educacion.value).subscribe(data=>this.educa=data);
  }

}
