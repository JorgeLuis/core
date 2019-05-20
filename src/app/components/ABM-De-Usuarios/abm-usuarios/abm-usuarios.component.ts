import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { OrganizacionesService } from '../../../services/organizaciones.service';
import { Organization } from 'src/app/class/organization';
import { Admin } from 'src/app/class/Admin';

import { RepoAdminComponent } from '../repo-admin/repo-admin.component';
import { SwDataService } from 'src/app/services/sw-data.service';
import { TargetAccess } from 'src/app/class/sw';
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
  selector: 'app-abm-usuarios',
  templateUrl: './abm-usuarios.component.html',
  styleUrls: ['./abm-usuarios.component.css']
})
export class AbmUsuariosComponent implements OnInit {

  hash = '*****';
  newTodoTarget = new TargetAccess();
  nombre = 'Nombre';
  email = '1@educ.gov.ar';
  selectedOrg = 'none';

  provRequest = [];
  url = 'https://api.meraki.com/api/v0/organizations/';
  tagsAdmin = [];
  provinciasObj: Organization[] = [];
  selectedAll: any;

  accessOrganization: Access[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'read-only', viewValue: 'Read Only' },
    { value: 'full', viewValue: 'Full' }
  ];

  selectedTarget = 'ALTA';
  target: Access[] = [
    { value: 'ALTA', viewValue: 'ALTA' },
    { value: 'CRM', viewValue: 'CRM' },
    { value: 'LAB', viewValue: 'LAB' },
    { value: 'Z3', viewValue: 'Z3' },
    { value: 'CERTIFICADO', viewValue: 'CERTIFICADO' }
  ];
  selectedTargetAccess = 'read-only';
  accessTempateAlta: Access[] = [
    { value: 'full', viewValue: 'Full' },
    { value: 'read-only', viewValue: 'Read-Only' },
    { value: 'monitor-only', viewValue: 'Monitor-only' },
    { value: 'guest-ambassador', viewValue: 'Guest Ambassador' }
  ];

  constructor(private dataServie: SwDataService, private organizacionServi: OrganizacionesService) { }

  ngOnInit() {
    // this.organizacionServi.getObjetos().subscribe((data: Organization[]) => {

    //   console.log('Lista', data);

    //   data.map((d) => {
    //     const org: Organization = {
    //       id: d.id,
    //       name: d.name,
    //       selected: false
    //     };

    //     this.provinciasObj.push(org);
    //     this.provinciasObj.sort(function (a, b) {
    //       if (a.name > b.name) {
    //         return 1;
    //       }
    //       if (a.name < b.name) {
    //         return -1;
    //       }
    //       // a must be equal to b
    //       return 0;
    //     });
    //   });
    // });

    this.provinciasObj = this.organizacionServi.getOrganizacionesLocal();
  }

  addTodoTarget() {
    this.newTodoTarget.tag = this.selectedTarget;
    this.newTodoTarget.access = this.selectedTargetAccess;

    // Validar si tiene duplicados la lista XP
    const lista = this.dataServie.getAllTodosTarget();
    const element1 = lista.filter(data => data.tag === this.selectedTarget)[0];

    if (element1 !== undefined) {
      Swal({
        title: 'Error por Duplicado',
        text: 'El target esta precargado.',
        type: 'error',
        confirmButtonText: 'Ok',
        cancelButtonColor: '#d33'
      });
    } else {
      this.dataServie.addTodoTarget(this.newTodoTarget);
      this.newTodoTarget = new TargetAccess();
      this.selectedTarget = 'ALTA';
      this.selectedTargetAccess = 'read-only';
    }

  }

  get todosTargetAccess() {
    return this.dataServie.getAllTodosTarget();
  }

  removeTarget(target) {
    this.dataServie.deleteTodoTarget(target.id);
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
      // console.log('Nuevo Admin: 1');
      const cantProv = this.provinciasObj
        .filter(prov => prov.selected === true).length;

      if (cantProv > 0) {
        if (this.selectedOrg === 'none') {
          this.dataServie.getAllTodosTarget().map((t) => {
            const newTarget = {
              'tag': t.tag,
              'access': t.access
            };
            this.tagsAdmin.push(newTarget);
          });
        } else {
          this.tagsAdmin = [];
        }

        if (this.selectedOrg === 'none' && this.dataServie.getAllTodosTarget().length === 0) {
          Swal({ title: 'Error', text: 'Falta completar con los Targets & Access.',
          type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
        } else {
          this.provRequest = this.provinciasObj
            .filter(prov => prov.selected === true);

          this.provRequest.map((req) => {
            // console.log('req:', req);
            const newAdmin = {
              'name': this.nombre,
              'email': this.email,
              'orgAccess': this.selectedOrg,
              'networks': [],
              'tags': this.tagsAdmin
            };

            console.log('Nuevo Admin: ', newAdmin);
            this.organizacionServi.postAdmin(req.id, newAdmin, this.hash);
          });

          this.tagsAdmin = [];
        }


      } else {
        Swal({
          title: 'Error por falta de Provincia',
          text: 'Se tiene que seleccionar al menos una provincia.',
          type: 'error',
          confirmButtonText: 'Ok',
          cancelButtonColor: '#d33'
        });
      }
    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }
  }
}
