import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProductsFacade } from 'src/app/shared/product/products.facade';
import { Product } from '../../models/product.model';

@Component({
  selector: 'catalog-items',
  templateUrl: './catalog-items.component.html',
  styleUrls: ['./catalog-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogItemsComponent {
  @Input() product!: Product;

  constructor(
    public facade: ProductsFacade
  ) { }
}
