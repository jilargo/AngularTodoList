import { Component } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent {
  //x button
  showForm : boolean = true;
  //password eye
  hide:boolean = true;
  //confirmPass
  
  passwordMatchError: boolean =false;

  firstname = new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]+\s?)+$/)]);
  lastname = new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]+\s?)+$/)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  passwordForm: FormGroup = this.formBuilder.group({
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validator: this.checkPasswords });
  
  
  
constructor(private formBuilder:FormBuilder, private snackBar: MatSnackBar ){
  
}



  getfirstNameErrorMessage(control: FormControl, fieldName: string) {
    if (control.hasError('required')) {
      return `You must enter a ${fieldName}`;
    }

    return control.hasError('invalidFirstname') ? `Not a valid ${fieldName}` : '';
  }
  getlastNameErrorMessage(control: FormControl, fieldName: string) {
    if (control.hasError('required')) {
      return `You must enter a ${fieldName}`;
    }

    return control.hasError('invalidLastname') ? `Not a valid ${fieldName}` : '';
  }
  
  
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  checkPasswords(group: FormGroup): any {
    const passwordControl = group.get('password');
    const confirmPasswordControl = group.get('confirmPassword');
  
    if (!passwordControl || !confirmPasswordControl) {
      // Handle the case where controls are null (optional)
      return { mismatch: true };
    }
  
    const password = passwordControl.value;
    const confirmPassword = confirmPasswordControl.value;
  
    return password === confirmPassword ? null : { mismatch: true };
  }
  
  onSubmit(): void {
    
  }
  closeForm(){
    this.showForm = false;
  }
}
