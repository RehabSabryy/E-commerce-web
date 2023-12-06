import { NavigationEnd, Router } from '@angular/router';
import { Component,DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isAuthorized: boolean = false;
  currentRoute!: string;
  constructor(private router: Router) {
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event.url);
      }
    });
  }
  DoCheck(): void {
    // Check if user data exists in local storage on page load
    const userData = JSON.parse(localStorage.getItem('userData')!);
    if (userData) {
      this.isAuthorized = true;
      
    }
  }
  login() {
    if(this.isAuthorized = true){
    this.router.navigate(['/login']);
  }
  }
  signUp() {
    if(this.isAuthorized = true){
    this.router.navigate(['/signup']);
    }
    }
  
  logout() {
    localStorage.removeItem('userData');
    this.isAuthorized = false;
    

  }
  myCart() {
    this.router.navigate(['/cart']);
  }
}
