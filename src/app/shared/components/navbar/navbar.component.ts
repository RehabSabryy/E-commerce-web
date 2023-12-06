import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentRoute!: string;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.updateCurrentRoute();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateCurrentRoute();
        console.log(event.url);
      }
    });
  }
    // this.currentRoute = '';
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.currentRoute = event.url;
    //     console.log(event.url);
    //   }
    // });
    private updateCurrentRoute(): void {
      this.currentRoute = this.router.url;
    }
  
}
