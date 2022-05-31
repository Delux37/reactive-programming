import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent implements OnInit {
  cartItems = this.cartService.cartItems;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
