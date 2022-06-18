import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contacto } from 'src/app/Interface/ContactoInterface';
import { ContactoServiceService } from 'src/app/Service/contacto-service.service'
import { NgbModalConfig, NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/Interface/EducacionInterface';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: [ './contacto.style.css']
})

export class ContactoComponent implements OnInit {
  u:Contacto=new Contacto(0,"",0,"","");
  contactos:Contacto[]=[]; 
  // trackByIdentity = (index: number, item: any) => item;
  constructor(private contactoS:ContactoServiceService,
              private form:FormBuilder,private router:Router,config: NgbModalConfig,
              private modalService: NgbModal) { 
                config.backdrop = 'static';
                config.keyboard = false;
              }

cont!:FormGroup;



  ngOnInit(): void {  
    this.contactoS.getContacto().subscribe(data=> { this.contactos=data});
    this.cont=this.form.group({
      id:[''],
      correo:['',Validators.required],
      telefono:['', Validators.required],
      linkedin:['', Validators.required],
      discord:['', Validators.required]
      })
    }
  

  // guardar(a:Contacto){
  //    this.contactoS.agregar(this.cont.value).subscribe(res=>this.contactos);
  //   // console.log(this.cont.value);
   
  // }
  editar(c:Contacto):void{
    localStorage.setItem("id",c.id!.toString());
    // this.router.navigate(["add"]);
  }

  guardar(){
    console.log(this.cont.value);
    this.contactoS.agregar(this.cont.value).subscribe(res=>(this.u=res,
      this.ngOnInit()
      ));
      this.modalService.dismissAll();
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
  

   openEdit(targetModal: any, con: Contacto) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
    this.cont.patchValue({
      id:con.id,
      correo:con.correo,
      telefono:con.telefono,
      linkedin:con.linkedin,
      discord:con.discord

    });
    console.log(this.cont.value.id)
  }
  openAgregar(targetModal: any){
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
  }



  actualizar(){

    this.contactoS.actualizar(this.cont.value).subscribe(res=>{ this.u=res,
      this.ngOnInit() })
      this.modalService.dismissAll();

  }
}
