import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserComponent } from './user/user.component';

import { UserService } from './service/user-service';

const userRoutes: Routes = [
  { path: "user", component: UserComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes)
  ],
  declarations: [UserComponent],
  providers: [UserService]
})
export class UserModule { }
