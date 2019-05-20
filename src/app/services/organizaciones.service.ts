import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { Admin } from '../class/Admin';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class OrganizacionesService {

  constructor(private httpMeraki: HttpClient, public snackBar: MatSnackBar, private router: Router) {
  }


  getOrganizacionesLocal() {
    return [
      {
        'id': '708233',
        'name': 'BUENOS AIRES #1',
        'selected': false
      },
      {
        'id': '689613692941107203',
        'name': 'EDUCAR_20',
        'selected': false
      },
      {
        'id': '635570497412661754',
        'name': 'BUENOS AIRES #3',
        'selected': false
      },
      {
        'id': '635570497412661777',
        'name': 'TIERRA DEL FUEGO',
        'selected': false
      },
      {
        'id': '635570497412661775',
        'name': 'SANTA FE',
        'selected': false
      },
      {
        'id': '635570497412661771',
        'name': 'SALTA',
        'selected': false
      },
      {
        'id': '635570497412661764',
        'name': 'JUJUY',
        'selected': false
      },
      {
        'id': '635570497412661763',
        'name': 'FORMOSA',
        'selected': false
      },
      {
        'id': '635570497412661756',
        'name': 'CATAMARCA',
        'selected': false
      },
      {
        'id': '635570497412661755',
        'name': 'BUENOS AIRES #4',
        'selected': false
      },
      {
        'id': '635570497412661776',
        'name': 'SGO. DEL ESTERO',
        'selected': false
      },
      {
        'id': '635570497412661770',
        'name': 'RIO NEGRO',
        'selected': false
      },
      {
        'id': '635570497412661768',
        'name': 'MISIONES',
        'selected': false
      },
      {
        'id': '635570497412661765',
        'name': 'LA PAMPA',
        'selected': false
      },
      {
        'id': '635570497412661761',
        'name': 'CORRIENTES',
        'selected': false
      },
      {
        'id': '635570497412661758',
        'name': 'CHUBUT',
        'selected': false
      },
      {
        'id': '635570497412661778',
        'name': 'TUCUMAN',
        'selected': false
      },
      {
        'id': '635570497412661773',
        'name': 'SAN LUIS',
        'selected': false
      },
      {
        'id': '635570497412661772',
        'name': 'SAN JUAN',
        'selected': false
      },
      {
        'id': '635570497412661760',
        'name': 'CORDOBA',
        'selected': false
      },
      {
        'id': '635570497412661757',
        'name': 'CHACO',
        'selected': false
      },
      {
        'id': '635570497412661753',
        'name': 'BUENOS AIRES #2',
        'selected': false
      },
      {
        'id': '635570497412661762',
        'name': 'ENTRE RIOS',
        'selected': false
      },
      {
        'id': '635570497412661767',
        'name': 'MENDOZA',
        'selected': false
      },
      {
        'id': '635570497412661769',
        'name': 'NEUQUEN',
        'selected': false
      },
      {
        'id': '635570497412661774',
        'name': 'SANTA CRUZ',
        'selected': false
      },
      {
        'id': '635570497412661766',
        'name': 'LA RIOJA',
        'selected': false

      },
      {
        'id': '635570497412661759',
        'name': 'CABA',
        'selected': false
      }
    ].sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  getLicencia(idOrg, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/licenseState';
    // console.log('URL: ', url);
    // console.log('Nuevo Admin ', admin);

    // si se comenta esto no se implementa la alta
    return this.httpMeraki.get(url, opciones);
  }

  postAdmin(idOrg, admin, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/admins';
    // console.log('URL: ', url);
    // console.log('Nuevo Admin ', admin);

    // si se comenta esto no se implementa la alta
    return this.httpMeraki.post(url, admin, opciones)
      .subscribe(
        data => {
          console.log('POST Request is successful ', data);
          Swal({
            title: 'Success', text: 'Se creó el administrador correctamente.',
            type: 'success',
            confirmButtonText: 'Ok',
            cancelButtonColor: '#d33'
          });
        },
        error => {
          console.log('Error', error);
          Swal({ title: 'Error', text: error.error.errors[0], type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
        }
      );
  }

  deleteAdmin(idOrg, email, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/admins';
    return this.httpMeraki.get(url, opciones)
      .subscribe(
        (data: any) => {

          const listAdmin = data.filter(admin => admin.email === email);
          if (listAdmin.length > 0) {
            const urlDelete = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/admins/' + listAdmin[0].id;
            console.log(urlDelete);
            this.httpMeraki.delete(urlDelete, opciones)
              .subscribe(
                dataDetele => {
                  console.log('Delete is successful');
                },
                error => {
                  console.log('Error in delete Admin', error);
                }
              );
          } else {
            Swal({
              title: 'Error', text: 'El administrador no esta registrado en la organización.',
              type: 'success', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
            });
          }
        },
        error => {
          Swal({ title: 'Error', text: error.error.errors[0], type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
          console.log('Error Admin undefine in organization', error);
        }
      );
  }

  getAdminByID(idOrg, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    // console.log('idOrg', idOrg);
    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/admins';

    return this.httpMeraki.get(url, opciones);
  }

  putAdmin(admin, idProv, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    console.log('Admin SIN EDITAR:', admin);
    const newAdmin = {
      'id': admin.id,
      'name': admin.name,
      'email': admin.email,
      'orgAccess': admin.orgAccess,
      'networks': [],
      'tags': admin.selectedTarget
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + idProv + '/admins/' + newAdmin.id;
    // console.log('URL EDITAR: ', url);
    console.log('Admin EDITADO', newAdmin);


    return this.httpMeraki.put(url, newAdmin, opciones)
      .subscribe(
        data => {
          console.log('PUT Request is successful ', data);
          this.openSnackBar();
          this.router.navigate(['/repo']);
        },
        error => {
          console.log('Error al editar el administrador.', error);
        }
      );
  }

  openSnackBar() {
    this.snackBar.open('Modificación exitosa', 'X', {
      duration: 1500
    });
  }
}
