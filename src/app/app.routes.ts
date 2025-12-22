import { Routes } from '@angular/router';
import { Dashboard1 } from './pages/dashboards/dashboard1/dashboard1';
import { Login } from './pages/authentication/login/login';
import { CompanyComponent } from './components/company/company';
import { CompanyDetailComponent } from './components/company/company-detail/company-detail';
import { CompanyUpdateComponent } from './components/company/company-update/company-update';
import { NewCompanyComponent } from './components/company/new-company/new-company';
import { CollaboratorComponent } from './components/collaborator/collaborator';
import { CollaboratorDetail } from './components/collaborator/collaborator-detail/collaborator-detail';
import { UpdateColaborador } from './components/collaborator/update-colaborador/update-colaborador';
import { NewCollaborator } from './components/collaborator/new-collaborator/new-collaborator';
import { MaintenanceNoticeComponent } from './shared/maintenance-notice-component/maintenance-notice-component';
import { PanelDashboard } from './pages/dashboards/panel-dashboard/panel-dashboard';

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
                redirectTo: 'panel-dash',
                pathMatch: 'full',
            },
            //--------------------
            // companies routes
            //---------------------
            {
                path: 'panel-dash',
                component: PanelDashboard,
                title: 'panel',
            },
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
                path: 'update-company/:id',
                component: CompanyUpdateComponent,
                title: 'Actualizar empresa'
            },
            {
                path: 'new-company',
                component: NewCompanyComponent,
                title: 'Actualizar empresa'
            },

            //--------------------
            // collaborators routes
            //---------------------
            {
                path: 'collaborators',
                component: CollaboratorComponent,
                title: 'collaborators',
            },
            {
                path: 'detail-collaborador/:id',
                component: CollaboratorDetail,
                title: 'Detalle-colaboradores'
            },
            {
                path: 'update-collaborator/:id',
                component: UpdateColaborador,
                title: 'Actualizar colaborador'
            },
            {
                path: 'new-collaborator',
                component: NewCollaborator,
                title: 'Actualizar colaborador'
            },
            {
                path: 'mantenimiento',
                component: MaintenanceNoticeComponent,
                title: 'Mantenimiento'
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
