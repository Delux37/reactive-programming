// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http'

// Components
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogItemsComponent } from './catalog/catalog-items/catalog-items.component';

// Vendors
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';



// Pipes 
import { CropText } from './pipes/crop-text.pipe';


@NgModule({
  declarations: [
    CatalogComponent,
    CatalogItemsComponent,
    CropText,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule
  ],
})
export class ProductsModule { }
