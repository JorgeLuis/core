import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Access } from 'src/app/class/sw';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baja-predio-usap',
  templateUrl: './baja-predio-usap.component.html',
  styleUrls: ['./baja-predio-usap.component.css']
})
export class BajaPredioUsapComponent implements OnInit {

  hash = '*****';
  constructor(private adminService: AdminService) { }
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


  name = 'API Test - Network';
  nameSerie = 'Q2TN-';
  selectedOrg = '689613692941107203';
  ngOnInit() {
  }

  guardar() {
    if (this.hash.length > 35) {
      this.adminService.deleteNetwork(this.selectedOrg, this.name, this.hash);
    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }
  }
}


