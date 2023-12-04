import { SharedService } from './../../../shared/shared.service';
import { iProduct } from './../../product.model';
import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: iProduct[] = [];
  categories: string[] = [];
  constructor(
    private service: ProductsService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.service.getAllProducts().subscribe(
      (res: any) => {
        console.log(res);

        this.products = res;
        this.sharedService.setAllProducts(this.products);
      },
      //error handling ...lw l api etghyr
      (error) => {
        console.log(error);

        alert('ERROR!');
      }
    );
  }
  // getCategories() {
  //   this.service.getCategories().subscribe(
  //     (result: any) => {
  //       console.log(result);
  //       this.categories = result;
  //     },
  //     (error) => {
  //       alert('ERROR!');
  //     }
  //   );
  // }
  getCategories() {
    this.service.getCategories().subscribe(
      (result: any) => {
        console.log(result);
  
        // Ensure that the result is an array before mapping
        if (Array.isArray(result)) {
          // Extract category names from products, handling undefined values
          this.categories = result.map((product: iProduct) => product?.category || 'Uncategorized');
        } else {
          console.error('Invalid response format for categories');
        }
      },
      (error) => {
        alert('ERROR!');
      }
    );
  }
  filterCategory(selectedCategory: string) {
  if (selectedCategory === 'all') {
    // If 'All' is selected, show all products
    this.sharedService.setAllProducts(this.products);
  } else {
    // Filter products based on the selected category
    const filteredProducts = this.products.filter(product => product.category === selectedCategory);
    this.sharedService.setAllProducts(filteredProducts);
  }
}
}
