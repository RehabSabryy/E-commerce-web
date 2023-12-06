import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  categories: string[] = [];
  currentRoute!: string;
  currentCategory!: string;
  constructor(private router:Router,private sharedService: SharedService){}
  
  ngOnInit(): void {
      this.categories = this.sharedService.getCategories(); // Get categories from service
    
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentCategory = event.url.split('/')[2];
      }
    });
  }
}
