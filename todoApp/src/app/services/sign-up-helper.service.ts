import { Injectable } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'


@Injectable({
  providedIn: 'root'
})
export class SignUpHelperService {
  
  constructor() { }

  getfirstNameErrorMessage(control: FormControl, fieldName: string) {
    if (control.hasError('required')) {
      return `You must enter a ${fieldName}`;
    }

    return control.hasError('invalidFirstname') ? `Not a valid ${fieldName}` : '';
  }
  getlastNameErrorMessage(control: FormControl, fieldName: string){
    if (control.hasError('required')) {
      return `You must enter a ${fieldName}`;
    }

    return control.hasError('invalidLastname') ? `Not a valid ${fieldName}` : '';
  }
  //email
  getErrorMessage(email: FormControl, fieldName: string){
    if (email.hasError('required')) {
      return 'You must enter a value';
    }

    return email.hasError('email') ? 'Not a valid email' : '';
  }
  //password
  // checkPasswords(group: FormGroup): any {
  //   const passwordControl = group.get('password');
  //   const confirmPasswordControl = group.get('confirmPassword');

  //   if (!passwordControl || !confirmPasswordControl) {
  //     // Handle the case where controls are null (optional)
  //     return { mismatch: true };
  //   }

  //   const password = passwordControl.value;
  //   const confirmPassword = confirmPasswordControl.value;

  //   return password === confirmPassword ? null : { mismatch: true };
  // }
  checkPasswords(group: FormGroup): any {
    if (!group) {
      return { mismatch: true };  // Handle the case where the group is null
    }
  
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
  
    if (!passwordControl || !confirmPasswordControl) {
      return { mismatch: true };  // Handle the case where controls are null (optional)
    }
  
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
  
    return password === confirmPassword ? null : { mismatch: true };
  }
  

}
