import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';

export const routes = [
    { 'path': 'home', component: HomeComponent },
    { 'path': 'dashboard', component: DashbaordComponent },
    { 'path': '', redirectTo: 'home', pathMatch: 'full' },
    { 'path': '**', component: PageNotFoundComponent }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
