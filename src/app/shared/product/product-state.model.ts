import { Product } from "src/app/products/models/product.model";
import { CartItem } from "../cart/models/cart-item.model";

export interface ProductState {
    selectedCategory: string;
    categories: string[];
    products: Product[];
    activeProduct: Product | null;
    cartItems: CartItem[];
    totalProductInCart: number;
    totalPriceOfCartItems: number;
    loading: boolean
}