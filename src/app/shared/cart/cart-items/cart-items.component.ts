import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductsFacade } from '../../product/products.facade';

@Component({
  selector: 'cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemsComponent {
  cartItems$ = this.facade.cartsVm$.pipe(map(vm => vm.cartItems))

  constructor(
    private facade: ProductsFacade
  ) { }
}
