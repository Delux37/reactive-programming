import { Injectable } from '@angular/core';
import { Product } from 'src/app/products/models/product.model';
import { CartItem } from '../models/cart-item.model';

@Injectable()
export class CartService {
  cartItems: CartItem[] = [];
  private _totalProducts: number = 0;

  get totalProducts(): number {
    console.log(this._totalProducts)
    return this._totalProducts;
  }

  addProduct(product: Product) {
    const item = this.cartItems.find(p => p.id === product.id);

    if(item) {
      item.amount++;
    } else {
      this.cartItems.push({...product, amount: 1});
    }
    const val = this.cartItems.reduce((acc,curr) => acc + curr.amount, 0);
    console.log(val);
    this._totalProducts = val;
  }
}
