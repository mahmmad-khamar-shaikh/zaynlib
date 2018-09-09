import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
import { PassRecoveryComponent } from './shared/pass-recovery/pass-recovery.component';

export const routes = [
    { 'path': 'home', component: HomeComponent, children: [
        { 'path': 'login', component: LoginComponent },
        { 'path': 'signup', component: SignupComponent },
        { 'path': 'password', component: PassRecoveryComponent },
        { 'path': '', component: LoginComponent }

    ] },
    { 'path': 'dashboard', component: DashbaordComponent },
    { 'path': '', redirectTo: 'home', pathMatch: 'full' },
    { 'path': '**', component: PageNotFoundComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
