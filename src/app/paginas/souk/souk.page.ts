import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-souk',
  templateUrl: './souk.page.html',
  styleUrls: ['./souk.page.scss'],
})
export class SoukPage implements OnInit {

  constructor() { }

  alertButtons = ['Aceptar', 'Cancelar'];
  ngOnInit() {
    console.log("Hola");
  }
}
