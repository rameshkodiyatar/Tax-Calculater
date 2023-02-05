import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
//import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerProductComponent } from './seller-product/seller-product.component';

@NgModule({
  declarations: [
   // HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    SellerHomeComponent,
    SellerProductComponent
  ],
  imports: [
    CommonModule,
    ECommerceRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ECommerceModule { }
