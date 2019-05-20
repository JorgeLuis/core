import { Component, OnInit } from '@angular/core';
import { Access } from 'src/app/class/sw';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unica',
  templateUrl: './unica.component.html',
  styleUrls: ['./unica.component.css']
})
export class UnicaComponent implements OnInit {

  hash = '*****';
  name = 'Nombre';
  selectType = 'appliance';
  new_name = '';
  selectedOrg = '689613692941107203';
  renombrar = [];
  new_NetId = '';
  new_type = '';
  new_selectedOrg = '';
  typeNetworks: Access[] = [
    { value: 'appliance', viewValue: 'Appliance' },
    { value: 'combined', viewValue: 'Combined' }
  ];
  organizaciones: Access[] = [
    { value: '708233', viewValue: 'BUENOS AIRES #1' },
    { value: '635570497412661753', viewValue: 'BUENOS AIRES #2' },
    { value: '635570497412661754', viewValue: 'BUENOS AIRES #3' },
    { value: '635570497412661755', viewValue: 'BUENOS AIRES #4' },
    { value: '635570497412661759', viewValue: 'CABA' },
    { value: '635570497412661756', viewValue: 'CATAMARCA' },
    { value: '635570497412661757', viewValue: 'CHACO' },
    { value: '635570497412661758', viewValue: 'CHUBUT' },
    { value: '635570497412661760', viewValue: 'CORDOBA' },
    { value: '635570497412661761', viewValue: 'CORRIENTES' },
    { value: '689613692941107203', viewValue: 'EDUCAR_20' },
    { value: '635570497412661762', viewValue: 'ENTRE RIOS' },
    { value: '635570497412661763', viewValue: 'FORMOSA' },
    { value: '635570497412661764', viewValue: 'JUJUY' },
    { value: '635570497412661765', viewValue: 'LA PAMPA' },
    { value: '635570497412661766', viewValue: 'LA RIOJA' },
    { value: '635570497412661767', viewValue: 'MENDOZA' },
    { value: '635570497412661768', viewValue: 'MISIONES' },
    { value: '635570497412661769', viewValue: 'NEUQUEN' },
    { value: '635570497412661770', viewValue: 'RIO NEGRO' },
    { value: '635570497412661771', viewValue: 'SALTA' },
    { value: '635570497412661772', viewValue: 'SAN JUAN' },
    { value: '635570497412661774', viewValue: 'SANTA CRUZ' },
    { value: '635570497412661773', viewValue: 'SAN LUIS' },
    { value: '635570497412661775', viewValue: 'SANTA FE' },
    { value: '635570497412661776', viewValue: 'SGO. DEL ESTERO' },
    { value: '635570497412661778', viewValue: 'TUCUMAN' },
    { value: '635570497412661777', viewValue: 'TIERRA DEL FUEGO' },
  ];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }

  buscar() {

    if (this.hash.length > 35) {
      this.adminService.getPrediosByName(this.selectedOrg, this.hash)
        .toPromise().then(
          (data: any) => {
            console.log('Data: ' , data);
            this.renombrar = data.filter(e => e.name === this.name && e.type === this.selectType);

            if (this.renombrar.length > 0) {
              this.new_name = this.renombrar[0].name;
              this.new_NetId = this.renombrar[0].id;
              this.new_type = this.renombrar[0].type;
              this.new_selectedOrg = this.selectedOrg;
            } else {
              if (this.renombrar.length === 0) {
                Swal({ title: 'No existe un predio con ese nombre en la provincia', text: 'Intente cambiando el Type Network',
                type: 'success', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
              }
            }
          });
    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }
  }

  enviar() {

    this.adminService.getPrediosByName(this.selectedOrg, this.hash)
      .toPromise().then(
        (data: any) => {
          console.log(data);
          this.renombrar = data.filter(e => e.name === this.name && e.type === this.selectType);

          if (this.renombrar.length > 0) {
            const new_name = this.new_name;
            const new_NetId = this.renombrar[0].id;

            console.log('Name: ' + new_name + ' NetId: ' + new_NetId);
            this.adminService.putNamePredios(new_name, new_NetId, this.hash, 1, null, 1);
          }
        });
  }

}
