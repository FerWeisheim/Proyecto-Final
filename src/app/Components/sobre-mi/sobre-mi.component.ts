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
  constructor(private router:Router,private tokenService:TokenService,private form:FormBuilder,
    private sobreMiService:SobremiService,
    private modalService: NgbModal) { }
  isAdmin:boolean=false;
  roles:string[];
  ngOnInit(): void {
    this.sobreMi=this.form.group({
    descripcion:['',Validators.required]
  });
    this.roles = this.tokenService.getAuthorities();this.roles.forEach(rol => { if (rol === 'ROL_ADMIN') { this.isAdmin = true; }});

   
  }

  openEdit(targetModal: any) {
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'xs'

    });
  }
  
  actualizar(){
    //  console.log(this.sobreMi.value)
     this.sobreMiService.agregar(this.sobreMi.value).subscribe((res)=>{this.Sobremi=res,this.ngOnInit})
    }

}
