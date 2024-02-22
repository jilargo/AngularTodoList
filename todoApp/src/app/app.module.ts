import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import {MatInputModule} from '@angular/material/input';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ThemeToggleComponent,
    SignUpComponent,
    
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatButtonModule,
      MatDialogModule,
      MatMenuModule,
      MatIconModule,
       
     
      FormsModule, 
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSnackBarModule
    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
