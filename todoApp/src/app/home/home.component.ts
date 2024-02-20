import { Component,OnDestroy } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog } from '@angular/material/dialog';
import { DarkModeService } from '../services/dark-mode.service'; 
import { Subscription } from 'rxjs';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnDestroy {
  darkMode: boolean = false;
  private subscription: Subscription;

  constructor(private dialog: MatDialog, private darkModeService: DarkModeService)
   {
    this.subscription = this.darkModeService.darkMode$.subscribe((value) => {
      this.darkMode = value;
    });
   }
  
  

  toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }
  ngOnDestroy() {
    // Unsubscribe to avoid memory leaks when the component is destroyed
    this.subscription.unsubscribe();
  }
  
  //functions
  openLoginDialog() {
    this.dialog.open(LoginComponent);
  }
  
  
  openSignUpDialog() {
    //this.dialog.open(SignUpComponent);
  }
  // darkMode = false;
  // toggleDarkMode() {
  //   this.darkMode = !this.darkMode;
  //   this.setDarkMode(this.darkMode);
  // }
  // setDarkMode(darkMode: boolean) {
    
  //   if (darkMode) {
  //     document.body.classList.add('dark-theme');
  //   } else {
  //     document.body.classList.remove('dark-theme');
  //   }
  // }

}
