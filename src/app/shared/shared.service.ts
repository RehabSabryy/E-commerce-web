import { iProduct } from './../products/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private allProducts: iProduct[] = [];
  private filteredProducts: iProduct[] = [];
  private productsToCart: iProduct[] = [];
  private categories: string[] = [];

  constructor() {}
  public findProduct(id: number): iProduct | undefined {
    return this.allProducts.find((product) => product.id === id);
  }
  public getAllProducts() {
    return this.allProducts;
  }
  public setAllProducts(arr: iProduct[]) {
    this.allProducts = arr;
  }
  public getFilteredProducts() {
    return this.filteredProducts;
  }
  public setFilteredProducts(arr: iProduct[]) {
    this.filteredProducts = arr;
  }
  public getCategories() {
    return this.categories;
  }
  public setAllCategories(arr: string[]) {
    this.categories = arr;
  }
  public addProductToCart(product: iProduct) {
    const found: boolean = this.productsToCart.includes(product);
    if (found) {
      const index: number = this.productsToCart.indexOf(product);
      this.productsToCart[index].quantity! += 1;
    } else {
      product.quantity = 1;
      this.productsToCart.push(product);
    }
    localStorage.setItem('productsToCart', JSON.stringify(this.productsToCart));
  }
}
