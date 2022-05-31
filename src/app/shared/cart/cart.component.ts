import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ProductsFacade } from '../product/products.facade';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {
   totalItems$ = this.facade.cartsVm$.pipe(map(state => state.totalProductInCart))

  constructor(
    private facade: ProductsFacade
  ) { }
}
