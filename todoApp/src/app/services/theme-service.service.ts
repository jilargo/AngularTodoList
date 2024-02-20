import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeServiceService {
private darkMode = false;
  isDarkMode(){
    return this.darkMode;
  }
  setDarkMode(isDarkMode: boolean){
    this.darkMode = isDarkMode;
    this.applyTheme();
  }
  private applyTheme(){
    if(this.darkMode){
      document.body.classList.add('dark-theme');

    }else{
      document.body.classList.remove('dark-theme');
    }
  }
}
