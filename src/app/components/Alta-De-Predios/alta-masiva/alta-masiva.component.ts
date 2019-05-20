import { Component, OnInit } from '@angular/core';
import { NomYnumSerie } from 'src/app/class/sw';
import { SwDataService } from 'src/app/services/sw-data.service';
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

export class RequestResult {
  nombre: string;
  predio: string;
  template: string;
  valor: boolean;
}

@Component({
  selector: 'app-alta-masiva',
  templateUrl: './alta-masiva.component.html',
  styleUrls: ['./alta-masiva.component.css']
})
export class AltaMasivaComponent implements OnInit {

  newTodoNombreYNum = new NomYnumSerie();

  listResultServer: RequestResult[] = [];

  name = 'API Test - Network';
  serieZ3 = 'Q2TN-';

  hash = 'b60a999c25774afe10be110998ffcf365368be78';
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

  constructor(private dataServie: SwDataService, private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getTemplate(this.selectedOrg, this.hash).subscribe(
      (data: any) => {
        this.selectetTempla = data.filter((template: any) => template.name.includes('Z3'))[0];
        this.myTemplate = data;
      });
  }

  addTodoSW() {
    this.newTodoNombreYNum.nombre = this.name;
    this.newTodoNombreYNum.serie = this.serieZ3;

    // Validar si tiene duplicados la lista XP
    const lista = this.dataServie.getAllTodosSeries();
    const element1 = lista.filter(data => data.nombre === this.name)[0];
    const element2 = lista.filter(data => data.serie === this.serieZ3)[0];

    if (element1 !== undefined || element2 !== undefined) {
      Swal({
        title: 'Error por Duplicado',
        text: 'El nombre o el serial esta repetido.',
        type: 'error',
        confirmButtonText: 'Ok',
        cancelButtonColor: '#d33'
      });
    } else {
      console.log(this.newTodoNombreYNum);
      this.dataServie.addTodoSerie(this.newTodoNombreYNum);
      this.newTodoNombreYNum = new NomYnumSerie();
      this.name = 'API Test - Network';
      this.serieZ3 = 'Q2TN-';
    }
  }

  get todosNomySerie() {
    return this.dataServie.getAllTodosSeries();
  }

  removeNomySerie(serie) {
    this.dataServie.deleteTodoSerie(serie.id);
  }

  enviar() {
    if (this.hash.length > 35) {
      const listaMaster: NomYnumSerie[] = [
        // { nombre: '542212', serie: 'Q2TN-NWAB-87HP', complete: false, id: 1 }
        // { nombre: '900697', serie: 'Q2TN-QNBB-XHT2', complete: false, id: 3 },
      ];
       // const listaMaster = this.dataServie.getAllTodosSeries();

      if (listaMaster.length > 0) {
        // console.log('listaMaster: ', listaMaster);
        // console.log('------Enviar----');
        let cantRequest = 0;

        listaMaster.filter(predio => {
          cantRequest++;
          const newNetwork = {
            'name': predio.nombre,
            'timeZone': 'America/Argentina/Buenos_Aires',
            'tags': this.tag,
            'type': this.type
          };

          this.adminService.postNetwork(this.selectedOrg,
            newNetwork, predio.serie, this.selectetTempla, cantRequest, this.hash, this.listResultServer);
        });
      } else {
        Swal({
          title: 'Error', text: 'Falta completar los nombres y seriales de los Z3.',
          type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
        });
      }
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
