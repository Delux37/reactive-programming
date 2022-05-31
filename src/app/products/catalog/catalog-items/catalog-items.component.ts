import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart/services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.scss']
})
export class CatalogItemsComponent implements OnInit {
  @Input() product!: Product;
  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
  }
  
  addToCart(product: Product) {

    this.cartService.addProduct(product);
  } 

}
