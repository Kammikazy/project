import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './../../public/login/login.component';

/*
const routes: Routes = [
  { path: 'login', component: LoginComponent}
];
*/
@NgModule({
  exports: [ RouterModule ]
})
export class PublicRoutesModule { }
/*
export const PublicRoutesModule: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent }
];
*/
