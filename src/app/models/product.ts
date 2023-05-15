import { productCategory } from "./productCategories";

export class Product {
	id: number;
	code: string;
	name: string;
	enable: boolean;
	product_category_id: number;
	price: number;
	category: productCategory;
}