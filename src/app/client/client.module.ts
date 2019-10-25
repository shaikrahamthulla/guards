import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientprofileComponent } from './clientprofile/clientprofile.component';
import  { RouterModule } from '@angular/router';

import { clientRoutes } from './client.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ],
  declarations: [ClientprofileComponent]
})
export class ClientModule { }
