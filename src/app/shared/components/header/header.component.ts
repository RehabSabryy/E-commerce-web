import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  isSignedUp :boolean = false;
  currentRoute!: string;
  constructor(private router: Router) {
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event.url);
      }
    });
  }
  ngOnInit(): void {
    // Check if user data exists in local storage on page load
    const userData = JSON.parse(localStorage.getItem('userData')!);
    if (userData) {
      this.isLoggedIn = true;
      this.isSignedUp=true; 
    }
  }
  login() {
    if(this.isLoggedIn = true){
    this.router.navigate(['/login']);
    }
  }
  signUp() {
    if(this.isSignedUp = true){
    this.router.navigate(['/signup']);
    }
  }
  logout(){
    localStorage.removeItem('userData');
    this.isLoggedIn = false;
    

  }
  myCart() {
    this.router.navigate(['/cart']);
  }
}
