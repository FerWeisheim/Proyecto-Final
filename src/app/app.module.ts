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
import { ContactoEditarComponent } from './Plantillas-Editar/contacto-editar/contacto-editar.component';
import { ContactoServiceService } from './Service/contacto-service.service';
import { PersonaServiceService } from './Service/persona-service.service';
import { SkillEditarComponent } from './Plantillas-Editar/skill-editar/skill-editar.component';
import { SkillAgregarComponent } from './Plantillas-Editar/skill-agregar/skill-agregar.component';
import { ContactoAgregarComponent } from './Plantillas-Editar/contacto-agregar/contacto-agregar.component';
import { DeleteComponent } from './Delete/delete/delete.component';
import { EducacionAgregarComponent } from './Plantillas-Editar/educacion-agregar/educacion-agregar.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';
import { PersonaEditarComponent } from './Plantillas-Editar/persona-editar/persona-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    EditarcontactoComponent,
    PrincipalComponent,
    SobreMiComponent,
    EducacionComponent,
    YoComponent,
    SkillComponent,
    ContactoEditarComponent,
    SkillEditarComponent,
    SkillAgregarComponent,
    ContactoAgregarComponent,
    DeleteComponent,
    EducacionAgregarComponent,
    PersonaEditarComponent,
   

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ReactiveFormsModule,
   AlifeFileToBase64Module,
   FormsModule
  ],
  providers: [ContactoServiceService,PersonaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
