import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { SecureComponent, SECURE_ROUTES } from './layout/secure';
import { PublicComponent, PublicRoutesModule } from './layout/public';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { HomeComponent } from './public/home/home.component';
const routes: Routes = [
  {  path: 'login', component: LoginComponent },
 {path: 'register', component: RegisterComponent },
 {path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
 //{ path: '', redirectTo: 'login', pathMatch: 'full' },
   //{ path: '', component: PublicComponent, data: { title: 'Public Views' }, children: PublicRoutesModule },
  //  { path: '', component: SecureComponent, canActivate: [AuthGuard], data: { title: 'Secure Views' }, children: SECURE_ROUTES },
//  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
