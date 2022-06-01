import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, debounceTime, distinctUntilChanged, map, Observable, switchMap, tap } from "rxjs";
import { Product } from "src/app/products/models/product.model";
import { environment } from "src/environments/environment";
import { ProductState } from "./product-state.model";

let _state: ProductState = {
    selectedCategory: 'All',
    categories: [],
    products: [],
    activeProduct: null,
    cartItems: [],
    totalProductInCart: 0,
    totalPriceOfCartItems: 0,
    loading: false
}

@Injectable({providedIn:'root'})
export class ProductsFacade {
    private store = new BehaviorSubject<ProductState>(_state);
    private state$ = this.store.asObservable()

    selectedCategory$ = this.state$.pipe(map(state => state.selectedCategory), debounceTime(500), distinctUntilChanged());
    categories$ = this.state$.pipe(map(state => state.categories), debounceTime(500), distinctUntilChanged());
    products$ = this.state$.pipe(map(state => state.products), distinctUntilChanged());
    activeProduct$ = this.state$.pipe(map(state => state.activeProduct), distinctUntilChanged());
    cartItems$ = this.state$.pipe(map(state => state.cartItems), distinctUntilChanged());
    totalAmount$ = this.state$.pipe(map(state => state.cartItems.reduce((acc, curr) => acc + curr.amount, 0)), distinctUntilChanged())
    loading$ = this.state$.pipe(map(state => state.loading));

    productsVm$ = combineLatest(
        this.selectedCategory$,
        this.activeProduct$,
        this.products$,
        this.categories$,
        this.loading$,
    ).pipe(
        map(([selectedCategory, activeProduct, products, categories, loading]) => {
            return { selectedCategory, activeProduct, products, categories, loading }
        })
    )

    cartsVm$ = combineLatest(
        this.cartItems$,
        this.totalAmount$
    ).pipe(
        map(([cartItems, totalAmount]) => {
            return { cartItems, totalAmount }
        })
    )

    updateCategory(selectedCategory: string) {
        this.updateState({..._state, selectedCategory, loading: true});
    }

    updateCartItems(product: Product) {
        const selected = _state.cartItems.find(item => item.id === product.id);

        if(selected) {
            this.updateState({..._state, cartItems: _state.cartItems.map(item => {
                if(item.id === product.id) {
                    return {
                        ...item, amount: ++item.amount
                    }
                }

                return item;
            })})
        } else {
            // Adds new if not exists
            this.updateState({ ..._state, cartItems: [..._state.cartItems, { ...product, amount: 1 }] });
        }

    }

    private fetchProducts(category: string): Observable<Product[]> {
        const url = category === 'All' ? environment.api.products : environment.api.fetchByCategory.replace('{0}', category);
        return this.http.get<Product[]>(url);
    }
    
    private updateState(state: ProductState) {
        this.store.next(_state = state);
    }

    private fetchCategories(): Observable<string[]> {
        return this.http.get<string[]>(environment.api.categories);
    }

    constructor(
        private http: HttpClient
    ) {
        // Fetch categories list
        this.fetchCategories()
            .subscribe(categories => this.updateState({ ..._state, categories: ['All', ...categories] }));

        // Observe category change stream
        this.selectedCategory$.pipe(
            switchMap(category => this.fetchProducts(category))
        )
        .subscribe(products => this.updateState({..._state, products, loading: false}))
    }
}