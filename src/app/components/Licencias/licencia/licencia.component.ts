import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { OrganizacionesService } from '../../../services/organizaciones.service';
import { Organization } from 'src/app/class/organization';
import Swal from 'sweetalert2';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface Access {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-licencia',
  templateUrl: './licencia.component.html',
  styleUrls: ['./licencia.component.css']
})

export class LicenciaComponent implements OnInit {

  hash = '*****';
  provRequest = [];
  tagsAdmin = [];
  provinciasObj: Organization[] = [];
  selectedAll: any;
  filtrados = [];

  constructor(private organizacionServi: OrganizacionesService) { }

  ngOnInit() {
    this.provinciasObj = this.organizacionServi.getOrganizacionesLocal();
  }

  selectAll() {
    for (let i = 0; i < this.provinciasObj.length; i++) {
      this.provinciasObj[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.provinciasObj.every(function (item: any) {
      return item.selected === true;
    });
  }

  enviar() {
    if (this.hash.length > 35) {
      this.filtrados = [];
      this.provRequest = this.provinciasObj
        .filter(prov => prov.selected === true);

      if (this.provRequest.length > 0) {
        this.provRequest.map((req) => {
          console.log('req:', req);
          this.organizacionServi.getLicencia(req.id, this.hash).subscribe(
            (d: any) => {

              const licencia: any = {
                name: req.name,
                expirationDate: d.expirationDate,
                status: d.status,
                mx84: d.licensedDeviceCounts.MX84,
                wireless: d.licensedDeviceCounts.wireless,
                MS225: Object.values(d.licensedDeviceCounts)[0],
                z3: d.licensedDeviceCounts.Z3,
              };

              console.log('GET Request is successful ', d.licensedDeviceCounts);
              this.filtrados.push(licencia);
            },
            error => {
              console.log('Error', error);
            }
          );
        });

      } else {
        Swal({ title: 'Error', text: 'Selecione una provincia para buscar.',
        type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
      }

    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }
  }
}
