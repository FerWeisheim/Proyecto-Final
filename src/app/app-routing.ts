import {RouterModule,Routes} from '@angular/router'
import { LoginComponent } from './Auth/login/login.component';
import { ContactoComponent } from './Components/contacto/contacto.component'
import { PrincipalComponent } from './Components/principal/principal.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { LoginUsuario } from './Interface/Login-Usuario';
import { SobreMi } from './Interface/SobreMiInterface';



const rutas: Routes=[

    {
        path: 'home',component: PrincipalComponent
    },
    {
        path: 'sobremi',component: SobreMiComponent
    },
    {
        path: 'login',component: LoginComponent
    },
    {
        path:'**',pathMatch: 'full', redirectTo: 'home'
    }
   
];

export const routing=RouterModule.forRoot(rutas);