import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AvvisiPageComponent } from './pages/avvisi-page/avvisi-page.component';


const routes: Routes = [
  { path: '', pathMatch : 'full', redirectTo : '/home'},
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'avvisi', pathMatch: 'full', component : AvvisiPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
