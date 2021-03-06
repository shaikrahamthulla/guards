import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { AuthGuardService } from '../guards/auth-guard.service';
import { RoleGuardService} from '../guards/role-guard.service';

export const dashboardRoutes: Routes = [
    { 
        path: "dashboard",     
        component: LayoutComponent,
        canActivate: [AuthGuardService],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'admin', component: AdminComponent, canActivate: [RoleGuardService],  data: {role: 'admin'}}
        ]
    }
]