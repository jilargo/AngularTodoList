import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private dialog: MatDialog) { }
  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }
  
  openSignUpDialog() {
    //this.dialog.open(SignUpComponent);
  }
}
