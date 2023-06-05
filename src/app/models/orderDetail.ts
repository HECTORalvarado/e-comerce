import { Product } from "./product";

export class OrderDetail {
	id: number;
	order_id: number;
	product_id: number;
	price: number;
	quantity: number;
	total: number;
	product: Product;
}