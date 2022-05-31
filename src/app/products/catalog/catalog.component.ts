import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory = 'All';

  loading = false;

  ngOnInit(): void {
    this.loading = true;

    this.fetchAll();

    this.http.get<string[]>(environment.api.categories)
      .subscribe(c => {
        this.categories = c;
      });
  }

  categoryChanged(category: string) {
    if(category === 'All') {
      this.fetchAll();
      this.selectedCategory = 'All'
      return;
    }

    this.http.get<Product[]>(environment.api.fetchByCategory.replace('{0}', category))
    .subscribe(p => {
      this.products = p
      this.selectedCategory = category
    })
  }

  private fetchAll() {
    this.http.get<Product[]>(environment.api.products)
    .subscribe(p => {
      this.loading = false;
      this.products = p;
    });
  }

  constructor(
    private http: HttpClient
  ) { }

}
