import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';

// Vendors
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule,
    HttpClientModule
  ],
  exports: [
    CartComponent,
    CartItemsComponent
  ]
})
export class SharedModule { }
