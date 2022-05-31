import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  get productTotal() {
    return this.cartService.totalProducts
  };

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }

}
