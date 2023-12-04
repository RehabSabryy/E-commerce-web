import { iProduct } from './../../product.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  amount: number = 0;
  cart!: iProduct;
  cartId!: number;
  @Input() data: any = {};
  @Input() product!: iProduct;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sharedService: SharedService
  ) {}

  ngOnInit() {
    // console.log(this.product);
  }

  showDetails() {
    localStorage.setItem('productToDetails', JSON.stringify(this.product));
    this.router.navigate(['/details', this.product.id]);
  }

  addToCart() {
    this.sharedService.addProductToCart(this.product);
  }
}
