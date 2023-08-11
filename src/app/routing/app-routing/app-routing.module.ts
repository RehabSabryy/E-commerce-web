import { ContactComponent } from './../../contact/contact/contact.component';
import { NotFoundPageComponent } from './../../not-found-page/not-found-page.component';
import { CartComponent } from './../../carts/components/cart/cart.component';
import { ProductsDetailsComponent } from './../../products/components/products-details/products-details.component';
import { AllProductsComponent } from './../../products/components/all-products/all-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './../../usersAccount/login/login.component';
import { SignUpComponent } from './../../usersAccount/sign-up/sign-up.component';
import { AboutComponent } from 'src/app/components/about/about.component';

const appRoutes: Routes = [
  { path: 'products', component: AllProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'details/:id', component: ProductsDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'notFound', component: NotFoundPageComponent },
  { path: '**', redirectTo: 'notFound', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
