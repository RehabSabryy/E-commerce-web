import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  submitted = false;
  isAuthorized = false;
  signUpForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    reEnterPassword: ['', Validators.required],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),
  });

  constructor(private fb: FormBuilder, private router : Router) {}
  onSubmit() {
    if (this.signUpForm.invalid) {
      return;
    }
    const userData = {
      firstName: this.signUpForm.value.firstName,
      lastName: this.signUpForm.value.lastName,
      email: this.signUpForm.value.email,
      password: this.signUpForm.value.password,
      address: this.signUpForm.value.address,
    };

    // Save user data to local storage
    localStorage.setItem('userData', JSON.stringify(userData));
    if (userData) {
      this.isAuthorized = true; // Set login flag
    }
    // Reset the form
    this.signUpForm.reset();
    this.goToHome()
  }
  goToHome(){
    const userData = JSON.parse(localStorage.getItem('userData')!);
    if (userData) {
      this.router.navigateByUrl('/products');
    } }
  }

