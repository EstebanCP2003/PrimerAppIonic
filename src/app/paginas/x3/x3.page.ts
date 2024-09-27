import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-x3',
  templateUrl: './x3.page.html',
  styleUrls: ['./x3.page.scss'],
})
export class X3Page implements OnInit {

  constructor() { }

  alertButtons = ['Aceptar', 'Cancelar'];
  ngOnInit() {
    console.log("Hola");
  }
}
