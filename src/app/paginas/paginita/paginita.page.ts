import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginita',
  templateUrl: './paginita.page.html',
  styleUrls: ['./paginita.page.scss'],
})
export class PaginitaPage implements OnInit {

  constructor() { }

  alertButtons = ['Aceptar', 'Cancelar'];
  ngOnInit() {
    console.log("Hola");
  }

}
