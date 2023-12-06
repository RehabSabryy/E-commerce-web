import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent {
  submitted = false;
  isAuthorized = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required , Validators.minLength(6)]],
  });

  constructor(private fb: FormBuilder, private router: Router) {
    const userData = JSON.parse(localStorage.getItem('userData')!);
    if (userData) {
      this.isAuthorized = true; // Set login flag
    }
  }
  //Add user form actions
  get f() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const userData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
    localStorage.setItem('userData', JSON.stringify(userData)!);
  
    // Update login status and navbar
    this.isAuthorized = true;
    this.goToHome();
  }
 goToHome(){
  const userData = JSON.parse(localStorage.getItem('userData')!);
  if (userData) {
    this.router.navigateByUrl('/products');
  } }
}
