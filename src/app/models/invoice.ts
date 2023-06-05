import { invoiceDetail } from "./invoiceDetail";

export class Invoice {
	id: number;
	order_id: number;
	code: string;
	total: number;
	invoice : invoiceDetail;
}