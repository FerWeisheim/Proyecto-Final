import {RouterModule,Routes} from '@angular/router'
import { ContactoComponent } from './Components/contacto/contacto.component'
import { EditarcontactoComponent } from './Components/editarcontacto/editarcontacto.component';
import { HomeComponent } from './Components/home/home.component'
import { PrincipalComponent } from './Components/principal/principal.component';
import { SkillComponent } from './Components/skill/skill.component';
import { YoComponent } from './Components/yo/yo.component';
import { DeleteComponent } from './Delete/delete/delete.component';
import { ContactoAgregarComponent } from './Plantillas-Editar/contacto-agregar/contacto-agregar.component';
import { ContactoEditarComponent } from './Plantillas-Editar/contacto-editar/contacto-editar.component';
import { EducacionAgregarComponent } from './Plantillas-Editar/educacion-agregar/educacion-agregar.component';
import { PersonaEditarComponent } from './Plantillas-Editar/persona-editar/persona-editar.component';
import { SkillAgregarComponent } from './Plantillas-Editar/skill-agregar/skill-agregar.component';
import { SkillEditarComponent } from './Plantillas-Editar/skill-editar/skill-editar.component';


const rutas: Routes=[

    {
        path: 'home',component: PrincipalComponent
    },
    {
        path:'contacto',component: ContactoComponent
    },
    {
        path:'agregar/educacion',component: EducacionAgregarComponent
    },
    {
        path:'editar/persona',component: PersonaEditarComponent
    },
    {
        path:'agregar/contacto',component: ContactoAgregarComponent
    },
    {
        path:'editar/contacto',component:ContactoEditarComponent
    },
    {
        path:'skills',component:SkillComponent
    },
    {
        path:'agregar/skill',component:SkillAgregarComponent
    },
    {
        path:'editar/skill',component:SkillEditarComponent
    },
    {
        path:'yo',component: YoComponent
    },
    {
        path:'delete',component: DeleteComponent
    },
    {
        path:'**',pathMatch: 'full', redirectTo: 'home'
    }
   
];

export const routing=RouterModule.forRoot(rutas);