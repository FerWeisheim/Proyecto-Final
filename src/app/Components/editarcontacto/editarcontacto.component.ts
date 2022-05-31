
import { NONE_TYPE } from '@angular/compiler';
import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Interface/ContactoInterface';
import { ContactoServiceService } from 'src/app/Service/contacto-service.service';


@Component({
  selector: 'app-editarcontacto',
  templateUrl: './editarcontacto.component.html',
  styles: [
  ]
})
export class EditarcontactoComponent implements OnInit {

  contact:Contacto = new Contacto(0,"",0,"","");



  constructor(private contactoS:ContactoServiceService,
    private form:FormBuilder,private router:Router) 
    {
       
      let id =localStorage.getItem("id");
      this.contactoS.getPorId(+id!).subscribe(data=> {this.contact=data,console.log(data)});
     }
     
  // cont:Contacto;
    contacto:FormGroup=this.form.group({
correo:['',Validators.required],
telefono:['', Validators.required],
linkedin:['', Validators.required],
discord:['', Validators.required]
})
   
  
  ngOnInit(): void {
    
    // let id =localStorage.getItem("id");
    //  this.contactoS.getPorId(+id!).subscribe(data=> {this.contact=data,console.log(data)});
    //   this.contactoS.getContacto().subscribe(res=>this.contacto=res);
  }
 
  actualizar(c:Contacto){
   if(this.contactoS.actualizar(c).subscribe(data=>{this.contact=data})){
     window.location.reload();
    this.router.navigate(['home']);

   }else{
     alert("ocurrio un error")}
  }


}
