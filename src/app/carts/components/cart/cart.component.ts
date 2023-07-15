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
    });
  }
  incrementItemCount(amount: number) {
    this.itemCount = this.itemCount + amount;
  }
  decrementItemCount(amount: number) {
    this.itemCount = this.itemCount - amount;
  }
}
