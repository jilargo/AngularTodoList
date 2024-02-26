import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SignUpHelperService } from '../services/sign-up-helper.service';




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})


export class SignUpComponent {
  //x button
  showForm: boolean = true;
  //password eye
  hide: boolean = true;
  //confirmPass
  firstname = new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]+\s?)+$/)]);
  lastname = new FormControl('', [Validators.required, Validators.pattern(/^([A-Za-z]+\s?)+$/)]);
  email = new FormControl('', [Validators.required, Validators.email]);
  passwordForm: FormGroup ; 

  constructor(private formBuilder: FormBuilder, private signUpHelperService: SignUpHelperService) {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.checkPasswords.bind(this) });
   }
  
  firstNameErrorMessage() {
    return this.signUpHelperService.getfirstNameErrorMessage(this.firstname, 'first Name');
  }
  getlastNameErrorMessage() {
    return this.signUpHelperService.getlastNameErrorMessage(this.lastname, 'lastname');
  }
  getErrorMessage() {
    return this.signUpHelperService.getErrorMessage(this.email, 'email');
  }
  checkPasswords(): any {
    return this.signUpHelperService.checkPasswords(this.passwordForm);
   
  }
  

  onSubmit(): void {
    
  }
  closeForm() {
    this.showForm = false;
  }
}
