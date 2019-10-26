import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from './dashboard/dashboard.module';
import { ClientModule } from './client/client.module';
import { UserModule } from './user/user.module';
import { RxjsoperatorsModule } from './rxjsoperators/rxjsoperators.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AuthService } from './service/auth.service';

import { APP_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    DashboardModule,
    ClientModule,
    UserModule,
    RxjsoperatorsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
