import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-souk',
  templateUrl: './souk.page.html',
  styleUrls: ['./souk.page.scss'],
})
export class SoukPage implements OnInit {

  constructor() { }

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Comparta con Nosotros!!!',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  ngOnInit() {
    console.log("Hola");
  }
}
