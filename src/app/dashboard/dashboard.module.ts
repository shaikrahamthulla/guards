import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router' 

import { LayoutComponent } from './layout/layout.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';

import { dashboardRoutes } from './dashboard.routes';
import { AuthGuardService } from '../guards/auth-guard.service';
import { RoleGuardService } from '../guards/role-guard.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [LayoutComponent, AdminComponent, HomeComponent],
  providers: [AuthGuardService, RoleGuardService]
})
export class DashboardModule { }
