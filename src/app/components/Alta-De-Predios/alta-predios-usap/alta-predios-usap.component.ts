import { Component, OnInit } from '@angular/core';
import { SwDataService } from 'src/app/services/sw-data.service';
import { SW, AP } from '../../../class/sw';
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/services/admin.service';
import { RequestResult, Template } from '../alta-masiva/alta-masiva.component';

export interface Access {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-alta-predios-usap',
  templateUrl: './alta-predios-usap.component.html',
  styleUrls: ['./alta-predios-usap.component.css']
})
export class AltaPrediosUsapComponent implements OnInit {

  hash = 'b60a999c25774afe10be110998ffcf365368be78';
  listResultServer: RequestResult[] = [];
  name = 'API-Test-USAP-1';
  serieUSAP = 'Q2PN-';
  type = 'wireless switch appliance';
  autoBind = 'Si';
  tag = 'ALTA';

  selectedOrg = '689613692941107203';
  selectetTempla: any;
  templates: Access[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'Template-Produccion', viewValue: 'Template-Produccion' }
  ];

  myTemplate: Template;

  newTodoSW = new SW();
  newTodoAP = new AP();

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

  constructor(private adminService: AdminService, private todoDataService: SwDataService) { }

  ngOnInit() {
    this.adminService.getTemplate(this.selectedOrg, this.hash).subscribe(
      (data: any) => {
        this.selectetTempla = data.filter((template: any) => template.name.includes('Template-Produccion'))[0];
        this.myTemplate = data;
      });
  }

  addTodoSW() {
    const lista = this.todoDataService.getAllTodos();
    const element1 = lista.filter(data => data.title === this.newTodoSW.title)[0];

    if (element1 !== undefined) {
      Swal({
        title: 'Error por Duplicado',
        text: 'El nombre del SW esta repetido.',
        type: 'error',
        confirmButtonText: 'Ok',
        cancelButtonColor: '#d33'
      });
    } else {
      this.todoDataService.addTodo(this.newTodoSW);
      this.newTodoSW = new SW();
    }
  }

  addTodoAP() {
    const lista = this.todoDataService.getAllTodosAP();
    const element1 = lista.filter(data => data.title === this.newTodoAP.title)[0];

    if (element1 !== undefined) {
      Swal({
        title: 'Error por Duplicado',
        text: 'El nombre del AP esta repetido.',
        type: 'error',
        confirmButtonText: 'Ok',
        cancelButtonColor: '#d33'
      });
    } else {
      this.todoDataService.addTodoAP(this.newTodoAP);
      this.newTodoAP = new AP();
    }
  }

  get todosSW() {
    return this.todoDataService.getAllTodos();
  }

  get todosAP() {
    return this.todoDataService.getAllTodosAP();
  }

  removeTodoSW(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  removeTodoAP(todo) {
    this.todoDataService.deleteTodoByIdAP(todo.id);
  }

  guardar() {
    if (this.hash.length > 35) {
      let autoBindValue = false;

      // const listaMasterAP: AP[] = [
      //   { 'id': 1, 'title': 'Q2PD-234T-8FQU', 'complete': false },
      //   { 'id': 2, 'title': 'Q2PD-23CV-8VJG', 'complete': false },
      //   { 'id': 3, 'title': 'Q2PD-23JM-3GYS', 'complete': false },
      //   { 'id': 4, 'title': 'Q2PD-23M8-RMLD', 'complete': false },
      //   { 'id': 5, 'title': 'Q2PD-24DH-GM7Q', 'complete': false },
      //   { 'id': 6, 'title': 'Q2PD-262Z-WVQU', 'complete': false },
      //   { 'id': 7, 'title': 'Q2PD-27AE-KVS8', 'complete': false },
      //   { 'id': 8, 'title': 'Q2PD-27CV-CJT3', 'complete': false },
      //   { 'id': 9, 'title': 'Q2PD-27EZ-AVBH', 'complete': false }
      // ];
       const listaMasterAP: AP[] = this.todoDataService.getAllTodosAP();

      // const listaMasterSW: SW[] = [
        // { 'id': 1, 'title': 'Q2GW-WSMS-FHPW', 'complete': false },
        // { 'id': 2, 'title': 'Q2GW-WTPR-BFSW', 'complete': false },
        // { 'id': 3, 'title': 'Q2GW-WTK5-XETC', 'complete': false },
        // { 'id': 4, 'title': 'Q2GW-WTPM-EW8A', 'complete': false },
        // { 'id': 5, 'title': 'Q2GW-WSDK-LFH2', 'complete': false },
        // { 'id': 6, 'title': 'Q2GW-WRLW-MVHB', 'complete': false },
        // { 'id': 7, 'title': 'Q2GW-WJU6-7VWS', 'complete': false }
      // ];

       const listaMasterSW = this.todoDataService.getAllTodos();

      if (listaMasterAP.length > 0 && listaMasterSW.length > 0) {
        const cantRequest = 1;

        const newNetwork = {
          'name': this.name,
          'timeZone': 'America/Argentina/Buenos_Aires',
          'tags': this.tag,
          'type': this.type
        };

        if (this.autoBind === 'Si') {
          autoBindValue = true;
        }
        this.adminService.postNetworkUSAP(this.selectedOrg,
          newNetwork, this.serieUSAP, this.selectetTempla, cantRequest, this.hash, this.listResultServer,
          autoBindValue, listaMasterAP, listaMasterSW);

      } else {
        Swal({
          title: 'Error por falta de campos', text: 'Se tiene que completar con al menos con un SW y un AP.',
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
        this.selectetTempla = data.filter((template: any) => template.name.includes('Template-Produccion'))[0];
        this.myTemplate = data;
      });
  }
}
