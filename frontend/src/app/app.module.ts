import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

/* Pages and services */
import { HomeComponent } from './pages/home/home.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './services/auth/token.interceptor';

/* Material imports */
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRippleModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import  {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';

/* Components */
import { AvvisiComponent } from './components/avvisi/avvisi.component';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './components/register-dialog/register-dialog.component';
import { AboutComponent } from './components/about/about.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { FooterComponent } from './components/footer/footer.component';

const MATERIAL_MODULES = [
  MatGridListModule,
  MatTabsModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatDialogModule,
  MatSliderModule,
  MatSnackBarModule,
  MatChipsModule,
  MatDividerModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvvisiComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    AboutComponent,
    ContattiComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ...MATERIAL_MODULES
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents : [
    LoginDialogComponent,
    RegisterDialogComponent
  ]
})
export class AppModule { }
