import { Cart } from "./cart";
import { Product } from "./product";

export class CartDetail {
	id: number;
	quantity: number;
	total: number;
	cart: Cart;
	product: Product;
}