import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { AddressService } from 'src/app/service/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  address : Address[] = [];

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.addressService.findAll().subscribe((data:any) => {
      this.address = data.result;
    });
  }

}
