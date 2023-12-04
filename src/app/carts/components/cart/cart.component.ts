import { SharedService } from './../../../shared/shared.service';
import { iProduct } from './../../../products/product.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: iProduct | undefined;
  cartId!: number;
  itemCount!: number;
  shipping: number = 2.99;
  productsToCart: iProduct[] = [];
  subtotal: number = 0.0;

  constructor(
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.productsToCart = JSON.parse(localStorage.getItem('productsToCart')!);
    this.productsToCart.forEach((product) => {
      this.subtotal += product.price;
      this.calculateSubtotal();
    });
  }
  calculateSubtotal() {
    this.subtotal = this.productsToCart.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
  }

  incrementItemCount(product: iProduct, amount: number) {
    product.quantity = (product.quantity || 0) + amount;
    this.calculateSubtotal();
  }

  decrementItemCount(product: iProduct, amount: number) {
    if (product.quantity && product.quantity > 0) {
      product.quantity -= amount;
      this.calculateSubtotal();
    }
}
}