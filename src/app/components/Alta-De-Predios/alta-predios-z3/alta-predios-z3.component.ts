import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';

export interface Access {
  value: string;
  viewValue: string;
}

export class Template {
  id: string;
  name: string;
}

@Component({
  selector: 'app-alta-predios-z3',
  templateUrl: './alta-predios-z3.component.html',
  styleUrls: ['./alta-predios-z3.component.css']
})
export class AltaPrediosZ3Component implements OnInit {

  name = 'API Test - Network';
  serieZ3 = 'Q2TN-';

  hash = '*****';
  type = 'appliance';
  autoBind = 'No';
  tag = 'ALTA Z3 ';
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


  myTemplate: Template;
  selectedOrg = '689613692941107203';
  selectetTempla: any;
  templates: Access[] = [
    // { value: 'none', viewValue: 'None' },
    // { value: 'templateproduccion', viewValue: 'Template-Produccion' },
    // { value: 'N_687924843080853373', viewValue: 'Template-Z3' }
  ];

  constructor(private adminService: AdminService) { }


  ngOnInit() {
    this.adminService.getTemplate(this.selectedOrg, this.hash).subscribe(
      (data: any) => {
        this.selectetTempla = data.filter((template: any) => template.name.includes('Z3'))[0];
        this.myTemplate = data;
      });
  }

  guardar() {
    if (this.hash.length > 35) {
      const newNetwork = {
        'name': this.name,
        'timeZone': 'America/Argentina/Buenos_Aires',
        'tags': this.tag,
        'type': this.type
      };

      // console.log('Se va a crear  la Network', newNetwork);
      this.adminService.postOneNetwork(this.selectedOrg, newNetwork, this.serieZ3, this.selectetTempla, 0, this.hash);
    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }

  }

  changeTemplate() {
    this.adminService.getTemplate(this.selectedOrg, this.hash).subscribe(
      (data: any) => {
        this.selectetTempla = data.filter((template: any) => template.name.includes('Z3'))[0];
        this.myTemplate = data;
      });
  }
}
