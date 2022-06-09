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
  u:Contacto=new Contacto(0,"",0,"","");
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

  borrar(id:Contacto){
    if(id){
      let aceptar = confirm("DESEA BORRAR?");
      if(aceptar){
         this.contactoS.deletePorId(id.id!).subscribe(data=>this.u=data);
        location.reload();
      }else{
        this.router.navigate(['/home']);
      }
    }
    
   }
  
}
