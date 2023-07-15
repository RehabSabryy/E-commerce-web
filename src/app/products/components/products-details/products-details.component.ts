import { SharedService } from './../../../shared/shared.service';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { iProduct } from '../../product.model';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css'],
})
export class ProductsDetailsComponent {
  @Input() product!: iProduct;
  productId!: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sharedService: SharedService
  ) {}
  ngOnInit() {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.product = JSON.parse(localStorage.getItem('productToDetails')!);
  }

  addToCart() {
    this.sharedService.addProductToCart(this.product);
  }
}
