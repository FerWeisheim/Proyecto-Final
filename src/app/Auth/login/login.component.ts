import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuario } from 'src/app/Interface/Login-Usuario';
import { AuthService } from 'src/app/Service/auth.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    isLogged=false;
    isLoginFail=false;
    roles:String[]=[];
    loginUsuario:LoginUsuario;
     nombreUsuario:string;
     password:string;
    errMsj: string;
    constructor(private form:FormBuilder, 
                private tokenService:TokenService,
                private authService:AuthService,
                private route:Router,
                private toastr:ToastrService) {
     }
   
 

  ngOnInit() {
      
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    else{
      this.isLogged=false;
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    console.log(this.loginUsuario);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.nombreUsuario, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.route.navigate(['/home']);
      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
         console.log(err.error.message);
      }
    );
  }
      
// logOut(){
//   this.isLogged=true;
     
//   window.sessionStorage.clear();
//   window.location.reload();
//   this.route.navigate(['/home']);
 
//   }


  

}
