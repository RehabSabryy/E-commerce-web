import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { ProductsService } from 'src/app/products/services/products.service';
import { NavigationEnd } from '@angular/router';
import { iProduct } from 'src/app/products/product.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  products: iProduct[] = [];
  categories: string[] = [];
  currentRoute!: string;
  currentCategory!: string;
  constructor(private router:Router,private sharedService: SharedService, private service:ProductsService){}
  
  // ngOnInit(): void {
  //     this.categories = this.sharedService.getCategories(); // Get categories from service
    
  //   this.router.events.subscribe((event) => {
  //     if (event instanceof NavigationEnd) {
  //       this.currentCategory = event.url.split('/')[2];
  //     }
  //   });
  // }
  ngOnInit(): void {
    // this.getProducts();
    this.getCategories();
  }
  getCategories() {
    this.service.getCategories().subscribe(
      (result: any) => {
        console.log(result);
        this.categories = result;
        
      },
      (error) => {
        alert('ERROR!');
      }
    );
  }
  filterCategory(selectedCategory: string) {
    if (selectedCategory === 'all') {
      // If 'All' is selected, show all products
      return;
    } else {
      // Filter products based on the selected category
      const filteredProducts = this.products.filter(product => product.category === selectedCategory);
      this.sharedService.setFilteredProducts(filteredProducts);
      this.products = this.sharedService.getFilteredProducts();
  
    }
  }
}
