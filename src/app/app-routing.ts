import {RouterModule,Routes} from '@angular/router'
import { LoginComponent } from './Auth/login/login.component';
import { ContactoComponent } from './Components/contacto/contacto.component'
import { PrincipalComponent } from './Components/principal/principal.component';
import { SobreMiComponent } from './Components/sobre-mi/sobre-mi.component';
import { LoginUsuario } from './Interface/Login-Usuario';
import { SobreMi } from './Interface/SobreMiInterface';



const rutas: Routes=[

    {
        path: '',component: PrincipalComponent
    },
    {
        path: 'login',component: LoginComponent
    }

];

export const routing=RouterModule.forRoot(rutas);