import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CatalogComponent } from "./catalog/catalog.component";

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: CatalogComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}