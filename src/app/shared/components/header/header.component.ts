import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentRoute!: string;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event.url);
      }
    });
  }
  login() {
    this.router.navigate(['/login']);
  }
  signUp() {
    this.router.navigate(['/signup']);
  }
  myCart() {
    this.router.navigate(['/cart']);
  }
}
