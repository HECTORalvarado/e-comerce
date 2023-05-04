import { Component, OnInit } from '@angular/core';
import { invoiceDetail } from 'src/app/models/invoiceDetail';
import { InvoiceDetailService } from 'src/app/service/invoice-detail.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.scss']
})
export class InvoiceDetailComponent implements OnInit {

  invoiceDetail : invoiceDetail[] = [];

  constructor(private invoiceDetailService: InvoiceDetailService) { }

  ngOnInit(): void {
    this.invoiceDetailService.findAll().subscribe((data:any) => {
      this.invoiceDetail = data.result;
    });
  }

}
