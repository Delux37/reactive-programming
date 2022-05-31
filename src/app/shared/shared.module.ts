import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { CartComponent } from './cart/cart.component';
import { CartItemsComponent } from './cart/cart-items/cart-items.component';

// Vendors
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

// Services
import { CartService } from './cart/services/cart.service';


@NgModule({
  declarations: [
    CartComponent,
    CartItemsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [
    CartService
  ],
  exports: [
    CartComponent,
    CartItemsComponent
  ]
})
export class SharedModule { }
