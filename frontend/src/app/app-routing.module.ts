import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvvisiPageComponent } from './pages/avvisi-page/avvisi-page.component';
import { Covid19Component } from './pages/covid19/covid19.component';


const routes: Routes = [
  { path: '', pathMatch : 'full', redirectTo : '/home'},
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'avvisi', pathMatch: 'full', component : AvvisiPageComponent},
  { path: 'covid19', pathMatch: 'full', component : Covid19Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
