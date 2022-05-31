import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Interface/ContactoInterface';
import { ContactoServiceService } from 'src/app/Service/contacto-service.service'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: [
  ]
})
export class ContactoComponent implements OnInit {

  contactos:Contacto[]=[]; 
  // trackByIdentity = (index: number, item: any) => item;
  constructor(private contactoS:ContactoServiceService,
              private form:FormBuilder,private router:Router) { 
             
              }


@Input() dato!:Contacto;
cont:FormGroup=this.form.group({
correo:['',Validators.required],
telefono:['', Validators.required],
linkedin:['', Validators.required],
discord:['', Validators.required]
})

  ngOnInit(): void {
       
    this.contactoS.getContacto().subscribe(data=> { this.contactos=data});
  
    }
  

  guardar(a:Contacto){
     this.contactoS.agregar(this.cont.value).subscribe(res=>this.contactos);
    // console.log(this.cont.value);
   
  }
  editar(c:Contacto):void{
    localStorage.setItem("id",c.id!.toString());
   
    // this.router.navigate(["add"]);
   
    
  }

  borrar(id:number){
    this.contactoS.deletePorId(id).subscribe(data=>this.contactos);
  }
  
}
