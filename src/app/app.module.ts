import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContactoComponent } from './Components/contacto/contacto.component';


//rutas
import {routing} from './app-routing';
import { EditarcontactoComponent } from './Components/editarcontacto/editarcontacto.component'
import { HomeComponent } from './Components/home/home.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './Components/educacion/educacion.component';
import { YoComponent } from './Components/yo/yo.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkillComponent } from './Components/skill/skill.component';

import { ContactoServiceService } from './Service/contacto-service.service';
import { PersonaServiceService } from './Service/persona-service.service';

import { DeleteComponent } from './Delete/delete/delete.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations'
import { interceptorProvider } from './interceptors/prod-interceptors.service';
import { InicioComponent } from './Components/inicio/inicio.component';
import { ProyectoComponent } from './Components/proyecto/proyecto.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { ExperienciaComponent } from './Components/experiencia/experiencia.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,

    PrincipalComponent,
    SobreMiComponent,
    EducacionComponent,
    YoComponent,
    SkillComponent,

    DeleteComponent,

    LoginComponent,
    RegistroComponent,
    InicioComponent,
    ProyectoComponent,
    ExperienciaComponent,
  ],
  imports: [
   BrowserModule,
   routing,
   HttpClientModule,
   ReactiveFormsModule,
   AlifeFileToBase64Module,
   FormsModule,
   NgbModule,
   BrowserAnimationsModule,
   IvyCarouselModule,
   ToastrModule.forRoot()


  ],
  providers: [ContactoServiceService,PersonaServiceService,interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
