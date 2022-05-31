import {RouterModule,Routes} from '@angular/router'
import { ContactoComponent } from './Components/contacto/contacto.component'
import { EditarcontactoComponent } from './Components/editarcontacto/editarcontacto.component';
import { HomeComponent } from './Components/home/home.component'
import { PrincipalComponent } from './Components/principal/principal.component';
import { SkillComponent } from './Components/skill/skill.component';
import { YoComponent } from './Components/yo/yo.component';
import { ContactoEditarComponent } from './Plantillas-Editar/contacto-editar/contacto-editar.component';
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
        path:'**',pathMatch: 'full', redirectTo: 'home'
    }
   
];

export const routing=RouterModule.forRoot(rutas);