import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from 'src/app/Interface/PersonaInterface';
import { PersonaServiceService } from 'src/app/Service/persona-service.service';
import { NgbModalConfig, NgbModal, ModalDismissReasons, } from '@ng-bootstrap/ng-bootstrap';
import { TokenService } from 'src/app/Service/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perso!:FormGroup;
  persona: Persona = new Persona (0,"","","",""); 
  per:Persona[]=[];
  base: string="";
  isAdmin:boolean=false;
  roles:string[];
  constructor(private personaService:PersonaServiceService,private form:FormBuilder,config: NgbModalConfig,
    private modalService: NgbModal,private tokenService:TokenService,private route: Router) { 
    config.backdrop = 'static';
    config.keyboard = false;}
// persona:Persona[]=[];
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=>{this.per=data});
    this.perso = this.form.group({
      id:[],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      titulo: ['', Validators.required],
      img: ['', Validators.required],
      
    }),
    this.roles = this.tokenService.getAuthorities();this.roles.forEach(rol => { if (rol === 'ROL_ADMIN') { this.isAdmin = true; }})
  }

  editar(per:Persona){
    
    let id= localStorage.setItem("id",per.id!.toString());
  }
  obtener(e:any){
   this.base=e[0].base64;
   this.perso.value.img=this.base;
  }

  openEdit(targetModal: any, pers:Persona) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'
  
    });
    this.perso.patchValue({
      id:pers.id,
      nombre: pers.nombre,
      apellido: pers.apellido,
      titulo: pers.titulo,
      img:pers.img
    });
    // console.log(this.perso.value.id)
  }
actualizar(){
  // this.perso.value.img=this.base;
  this.personaService.actualizar(this.perso.value).subscribe(res=>{this.persona=res,
  this.ngOnInit()});
  this.modalService.dismissAll();
}
salir(){
  this.tokenService.logOut();
  window.location.reload;
  this.route.navigate(['/home']);
  
}
}
