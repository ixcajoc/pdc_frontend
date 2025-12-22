import { Routes } from '@angular/router';
import { Dashboard1 } from './pages/dashboards/dashboard1/dashboard1';
import { Login } from './pages/authentication/login/login';
import { CompanyComponent } from './components/company/company';
import { CompanyDetailComponent } from './components/company/company-detail/company-detail';
import { CompanyUpdateComponent } from './components/company/company-update/company-update';
import { NewCompanyComponent } from './components/company/new-company/new-company';

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
            //--------------------
            // companies routes
            //---------------------
            {
                path: 'companies',
                component: CompanyComponent,
                title: 'Company',
            },
            {
                path: 'detail-company/:id',
                component: CompanyDetailComponent,
                title: 'Detalle-empresa'
            },
            {
                path: 'update-company',
                component: CompanyUpdateComponent,
                title: 'Actualizar empresa'
            },
            {
                path: 'new-company',
                component: NewCompanyComponent,
                title: 'Actualizar empresa'
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
