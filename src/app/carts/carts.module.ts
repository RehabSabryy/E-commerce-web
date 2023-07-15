import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductsModule } from '../products/products.module';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, ProductsModule, NgbPaginationModule, NgbAlertModule],
})
export class CartsModule {}
