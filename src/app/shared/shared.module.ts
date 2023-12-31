import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsModule } from '../products/products.module';

import { CartsModule } from '../carts/carts.module';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterModule } from '@angular/router';

import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { AccountModule } from '../usersAccount/account.module';
import { ContactComponent } from '../contact/contact/contact.component';
@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    CartsModule,
    AccountModule,
    MatIconModule,
    MatButtonModule,
    NgbPaginationModule,
    NgbAlertModule,
    MatToolbarModule,
    MatBadgeModule,
    RouterModule 
    
  ],
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
  ],
})
export class SharedModule {}
