import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  viewUnico = true;
  viewMasivo = false;
  viewDuplicado = false;
  constructor() { }

  ngOnInit() {
  }

  mostrarUnico() {
    this.viewUnico = true;
    this.viewMasivo = false;
    this.viewDuplicado = false;
  }

  mostrarMasivo() {
    this.viewUnico = false;
    this.viewMasivo = true;
    this.viewDuplicado = false;
  }

  mostrarDuplicados() {
    this.viewUnico = false;
    this.viewMasivo = false;
    this.viewDuplicado = true;
  }
}
