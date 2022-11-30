import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SobreMi } from 'src/app/Interface/SobreMiInterface';
import { SobremiService } from 'src/app/Service/sobremi.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  
  Sobremi:SobreMi =  new SobreMi (0,"");
  sobreMi!:FormGroup;
  yo:SobreMi[]=[];



  constructor(private router:Router,private tokenService:TokenService,private form:FormBuilder,
    private sobreMiService:SobremiService,
    private modalService: NgbModal) { }
  isAdmin:boolean=false;
  roles:string[];
  ngOnInit(): void {
     this.sobreMiService.getSobreMi().subscribe(res=>this.yo=res);
    this.sobreMi=this.form.group({
    id:[],
    descripcion:['',Validators.required]
  });
    this.roles = this.tokenService.getAuthorities();this.roles.forEach(rol => { if (rol === 'ROL_ADMIN') { this.isAdmin = true; }});
   
   
  }



  // abrir modal 
  open(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'sm'
    });
  }
// ------------------

// pasar los datos al modal

openEdit(targetModal: any, sobre:SobreMi ) {
  this.modalService.open(targetModal, {
    centered: true,
    backdrop: 'static',
    size: 'lg',
  });
  this.sobreMi.patchValue({
    id:sobre.id,
    descripcion: sobre.descripcion,
  });
  // console.log(this.educacio.value)
}



// -------------



  actualizar(){
     console.log(this.sobreMi.value)
     this.sobreMiService.actualizar(this.sobreMi.value).subscribe(res=>{this.Sobremi=res,
     this.ngOnInit();}
    );
   this.modalService.dismissAll();
    }

}
