import { Component, OnInit } from '@angular/core';
import { faWarehouse } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  warehouse = faWarehouse;

  componente : number;

  constructor() { }

  ngOnInit(): void {
  }

  comprobarComponente(dato) {
    this.componente = dato;
  }

}
