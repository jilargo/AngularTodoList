import { Component } from '@angular/core';
import { ThemeServiceService } from '../services/theme-service.service'; 

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.css']
})
export class ThemeToggleComponent {
isDarkMode: boolean;
constructor(public themeService:   ThemeServiceService){
this.isDarkMode = this.themeService.isDarkMode();
}
toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  this.themeService.setDarkMode(this.isDarkMode);
}
}
