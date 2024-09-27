import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chamba',
  templateUrl: './chamba.page.html',
  styleUrls: ['./chamba.page.scss'],
})
export class ChambaPage implements OnInit {

  constructor() { }

  alertButtons = ['Aceptar', 'Cancelar'];
  ngOnInit() {
    console.log("Hola");
  }

}
