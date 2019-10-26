import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


export const APP_ROUTES: Routes = [

    { path: 'login', component: LoginComponent },    
    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
    { path: 'client', loadChildren: './client/client.module#ClientModule'  },
    { path: 'user', loadChildren: './user/user.module#UserModule'  },
    { path: "rxjs", loadChildren: './rxjsoperators/rxjsoperators.module#RxjsoperatorsModule' },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: '**', component: PageNotFoundComponent }

];