import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './layout/public/public.component';
import { SecureComponent } from './layout/secure/secure.component';
import { PublicRoutesModule } from './layout/public/public-routes.module';
import { SecureRoutesModule } from './layout/secure/secure-routes.module';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicRoutesModule,
    SecureRoutesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
