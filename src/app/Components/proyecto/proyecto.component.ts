import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/Interface/ProyectoInterface';
import { ProyectoService } from 'src/app/Service/proyecto.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})

export class ProyectoComponent implements OnInit {
  proyecto: FormGroup;
  Proyecto:Proyecto[]=[];
  proyectoClass:Proyecto = new Proyecto(0,"","","","");
  private deleteId:number;
  private a:string;
  private roles:string[];
  isAdmin=false;
  constructor(private form:FormBuilder,private http:HttpClient,private modalService: NgbModal,private proyectoService:ProyectoService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.proyectoService.getProyecto().subscribe(res=>{this.Proyecto=res})
    this.proyecto=this.form.group({
    id:['',Validators.required],
    proyecto:['',Validators.required],
    descripcion:['',Validators.required],
    urlSourceCode:['',Validators.required],
    img:['',Validators.required],
    })
    this.roles = this.tokenService.getAuthorities();this.roles.forEach(rol => { if (rol === 'ROL_ADMIN') { this.isAdmin = true; }})
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
      proyecto:pro.proyecto,
      descripcion:pro.descripcion,
      urlSourceCode:pro.urlSourceCode,
      img:pro.img
    });
  }

  openDelete(targetModal, proy: Proyecto) {
    this.deleteId = proy.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
    });
  }
  onDelete() {
    this.proyectoService.BorrarPorId(this.deleteId)
      .subscribe((resul) => {
        this.proyectoClass= resul
        this.ngOnInit();
        this.modalService.dismissAll();
      });
  };
  obtener(e:any){  
    this.a=e[0].base64;
    this.proyecto.value.img=this.a;
    }



  guardar(){
    this.proyectoService.agregar(this.proyecto.value).subscribe(res=>{this.proyectoClass=res,this.ngOnInit();}
    );
    console.log(this.proyecto.value);
    this.modalService.dismissAll(); 
  }
  actualizar(){
    this.proyectoService.actualizar(this.proyecto.value).subscribe(res=>{this.proyectoClass=res,this.ngOnInit();}
    );
    this.modalService.dismissAll(); 
  }

}
