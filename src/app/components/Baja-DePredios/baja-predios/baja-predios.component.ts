import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-baja-predios',
  templateUrl: './baja-predios.component.html',
  styleUrls: ['./baja-predios.component.css']
})
export class BajaPrediosComponent implements OnInit {

  viewZ3 = false;
  viewUsap = false;
  viewMasivoZ3 = false;
  viewMasivoUSAP = true;
  constructor() { }

  ngOnInit() {
  }

  mostrarZ3() {
    this.viewZ3 = true;
    this.viewUsap = false;
    this.viewMasivoZ3 = false;
    this.viewMasivoUSAP = false;
  }

  mostrarUsap() {
    this.viewZ3 = false;
    this.viewUsap = true;
    this.viewMasivoZ3 = false;
    this.viewMasivoUSAP = false;
  }

  mostrarMasivaZ3() {
    this.viewZ3 = false;
    this.viewUsap = false;
    this.viewMasivoZ3 = true;
    this.viewMasivoUSAP = false;
  }

  mostrarMasivaUSAP() {
    this.viewZ3 = false;
    this.viewUsap = false;
    this.viewMasivoZ3 = false;
    this.viewMasivoUSAP = true;
  }

}
