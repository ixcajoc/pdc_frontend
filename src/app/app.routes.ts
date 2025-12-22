import { Routes } from '@angular/router';
import { Dashboard1 } from './pages/dashboards/dashboard1/dashboard1';
import { Login } from './pages/authentication/login/login';
import { CompanyComponent } from './components/company/company';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
        title: 'Iniciar sesión',
    },
    {
        path: 'dashboard1',
        component: Dashboard1,
        title: 'Admin dashboard',
        children:[
            {
                path: '',
                redirectTo: 'panel-dashboard',
                pathMatch: 'full',
            },
            {
                path: 'companies',
                component: CompanyComponent,
                title: 'Company',
                children:[
                    {
                        path: '',
                        redirectTo: 'panel-dashboard',
                        pathMatch: 'full',
                    },
                ],
            },
            

            // if the path is wrong, This component will charge
            {
                path: '',
                redirectTo: 'dashboard1',
                pathMatch: 'full',

            }
        ]

        
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    }



    
    

];
