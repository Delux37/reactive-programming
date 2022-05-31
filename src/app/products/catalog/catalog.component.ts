import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductsFacade } from 'src/app/shared/product/products.facade';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogComponent {
  vm$ = this.facade.productsVm$;


  constructor(
    public facade: ProductsFacade
  ) { }
}
