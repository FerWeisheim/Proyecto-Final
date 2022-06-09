import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Interface/ContactoInterface';
import { ContactoServiceService } from 'src/app/Service/contacto-service.service';

@Component({
  selector: 'app-contacto-agregar',
  templateUrl: './contacto-agregar.component.html',
  styleUrls: ['./contacto-agregar.component.css']
})
export class ContactoAgregarComponent implements OnInit {
  contactos:Contacto[]=[]; 
  contact:Contacto=new Contacto(0,"",0,"","");
  constructor(private form: FormBuilder,private contactoS:ContactoServiceService,private router:Router) { }


  cont:FormGroup=this.form.group({
    correo:['',Validators.required],
    telefono:['', Validators.required],
    linkedin:['', Validators.required],
    discord:['', Validators.required]
    })


  ngOnInit(): void {


  }
  agregar(){
  this.contactoS.agregar(this.cont.value).subscribe(data=>this.contact=data);
  this.router.navigate(['/home']);

  }
}
