import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { RequestResult, Access, Template } from '../alta-masiva/alta-masiva.component';
import { SW, AP, UtmUsapAlta } from 'src/app/class/sw';
import { AdminService } from 'src/app/services/admin.service';
import { SwDataService } from 'src/app/services/sw-data.service';


@Component({
  selector: 'app-alta-masiva-usap',
  templateUrl: './alta-masiva-usap.component.html',
  styleUrls: ['./alta-masiva-usap.component.css']
})

export class AltaMasivaUsapComponent implements OnInit {

  hash = 'b60a999c25774afe10be110998ffcf365368be78';
  listResultServer: RequestResult[] = [];
  name = 'API-Test-USAP-1';
  serieUSAP = 'Q2PN-';
  type = 'wireless switch appliance';
  autoBind = 'Si';
  tag = 'ALTA';

  selectedOrg = '689613692941107203';
  selectetTempla: any;
  myTemplate: Template;

  newTodoSW = new SW();
  newTodoAP = new AP();
  newTodoUSAP = new UtmUsapAlta();
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

    this.todoDataService.deleteAllSW();
    this.todoDataService.deleteAllAP();
  }

  addTodoUSAP() {

    const listaUSAP = this.todoDataService.getAllTodosUSAPAlta();
    const element1 = listaUSAP.filter(data => data.name === this.name)[0];
    if (element1 !== undefined) {
      Swal({
        title: 'Error por Duplicado',
        text: 'El nombre del USAP esta repetido.',
        type: 'error',
        confirmButtonText: 'Ok',
        cancelButtonColor: '#d33'
      });
    } else {
      if (this.todosSW.length > 0 && this.todosAP.length > 0) {

        this.newTodoUSAP.name = this.name;
        this.newTodoUSAP.selectOrg = this.selectedOrg;
        this.newTodoUSAP.selectString = this.organizaciones.filter((o) => o.value === this.selectedOrg)[0].viewValue;
        this.newTodoUSAP.listAP = this.todosAP;
        this.newTodoUSAP.listSw = this.todosSW;
        this.newTodoUSAP.serie = this.serieUSAP;
        this.newTodoUSAP.template = this.selectetTempla;

        this.todoDataService.addTodoUSAPAlta(this.newTodoUSAP);
        this.newTodoUSAP = new UtmUsapAlta();
        this.todoDataService.deleteAllSW();
        this.todoDataService.deleteAllAP();

      } else {
        Swal({
          title: 'Error', text: 'Falta completar con los APs o los Sws.',
          type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
        });
      }
    }

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
      this.newTodoUSAP.listSw.push(this.newTodoSW);
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
      this.newTodoUSAP.listAP.push(this.newTodoAP);
      this.newTodoAP = new AP();
    }
  }

  get todosUSAPs() {
    return this.todoDataService.getAllTodosUSAPAlta();
  }

  get todosSW() {
    return this.todoDataService.getAllTodos();
  }


  get todosAP() {
    return this.todoDataService.getAllTodosAP();
  }

  removeTodoUSAP(todo) {
    this.todoDataService.deleteTodoUSAPAlta(todo.id);
  }

  removeTodoSW(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  removeTodoAP(todo) {
    this.todoDataService.deleteTodoByIdAP(todo.id);
  }

  guardar() {

    if (this.hash.length > 35) {
      // console.log(this.todoDataService.getAllTodosUSAPAlta());
      // if (this.todoDataService.getAllTodosUSAPAlta().length > 0) {

      const listaAP_1: AP[] = [
        { 'id': 1, 'title': 'Q2PD-234T-8FQU', 'complete': false },
        { 'id': 2, 'title': 'Q2PD-23CV-8VJG', 'complete': false },
        { 'id': 3, 'title': 'Q2PD-23JM-3GYS', 'complete': false },
        { 'id': 4, 'title': 'Q2PD-23M8-RMLD', 'complete': false },
      ];
      const listaAP_2: AP[] = [
        { 'id': 1, 'title': 'Q2PD-24DH-GM7Q', 'complete': false },
        { 'id': 2, 'title': 'Q2PD-262Z-WVQU', 'complete': false },
        { 'id': 3, 'title': 'Q2PD-27AE-KVS8', 'complete': false },
        { 'id': 4, 'title': 'Q2PD-27CV-CJT3', 'complete': false },
        { 'id': 5, 'title': 'Q2PD-27EZ-AVBH', 'complete': false }
      ];

      const listaAP_3: AP[] = [
        { 'id': 1, 'title': 'Q2PD-27FP-9WT9', 'complete': false },
        { 'id': 2, 'title': 'Q2PD-27XH-S9AF', 'complete': false },
        { 'id': 3, 'title': 'Q2PD-285B-WUVP', 'complete': false },
        { 'id': 4, 'title': 'Q2PD-28EX-P343', 'complete': false },
        { 'id': 5, 'title': 'Q2PD-28FD-H5CQ', 'complete': false },
        { 'id': 6, 'title': 'Q2PD-28G9-SNFY', 'complete': false },
        { 'id': 7, 'title': 'Q2PD-28GJ-FWWR', 'complete': false },
      ];

      //  const listaMasterAP: AP[] = this.todoDataService.getAllTodosAP();

      const listaSW_1: SW[] = [
        { 'id': 1, 'title': 'Q2GW-WSMS-FHPW', 'complete': false },
        { 'id': 2, 'title': 'Q2GW-WTPR-BFSW', 'complete': false },
        { 'id': 3, 'title': 'Q2GW-WTK5-XETC', 'complete': false },
      ];
      const listaSW_2: SW[] = [
        { 'id': 1, 'title': 'Q2GW-WTPM-EW8A', 'complete': false },
        { 'id': 2, 'title': 'Q2GW-WSDK-LFH2', 'complete': false },
        { 'id': 3, 'title': 'Q2GW-WSPU-L3Q3', 'complete': false },
        { 'id': 4, 'title': 'Q2GW-N8AP-AECW', 'complete': false }
      ];

      const listaSW_3: SW[] = [
        { 'id': 1, 'title': 'Q2GW-WTVJ-4Z94', 'complete': false },
        { 'id': 2, 'title': 'Q2GW-WTZ9-3RUY', 'complete': false },
        { 'id': 3, 'title': 'Q2GW-WSDW-ER8Q', 'complete': false }
      ];
      //    const listaMasterSW = this.todoDataService.getAllTodos();

      const usap1 = new UtmUsapAlta();
      usap1.listSw = listaSW_1;
      usap1.listAP = listaAP_1;
      usap1.id = 1;
      usap1.name = 'Test 1';
      usap1.selectOrg = '689613692941107203';
      usap1.selectString = 'EDUCAR_20';
      usap1.serie = 'Q2PN-T5J8-JJ4K';
      usap1.template = { id: 'L_689613692941107605', name: 'DEMO_SSIDS' };

      const usap2 = new UtmUsapAlta();
      usap2.listSw = listaSW_2;
      usap2.listAP = listaAP_2;
      usap2.id = 2;
      usap2.name = 'Test 2';
      usap2.selectOrg = '689613692941107203';
      usap2.selectString = 'EDUCAR_20';
      usap2.serie = 'Q2PN-4Y9B-HCHY';
      usap2.template = { id: 'L_689613692941107605', name: 'DEMO_SSIDS' };

      const usap3 = new UtmUsapAlta();
      usap3.listSw = listaSW_3;
      usap3.listAP = listaAP_3;
      usap3.id = 2;
      usap3.name = 'Test 3';
      usap3.selectOrg = '689613692941107203';
      usap3.selectString = 'EDUCAR_20';
      usap3.serie = 'Q2PN-25XT-UTMD';
      usap3.template = { id: 'L_689613692941107605', name: 'DEMO_SSIDS' };

      const listaUsapMaster = [];
      listaUsapMaster.push(usap1);
      listaUsapMaster.push(usap2);
      listaUsapMaster.push(usap3);
      console.log(listaUsapMaster);

      let autoBindValue = false;
      let cantRequest = 0;

      listaUsapMaster.map((usap: UtmUsapAlta) => {
        const newNetwork = {
          'name': usap.name,
          'timeZone': 'America/Argentina/Buenos_Aires',
          'tags': this.tag,
          'type': this.type
        };

        if (this.autoBind === 'Si') {
          autoBindValue = true;
        }

        setTimeout(async () => {
          cantRequest++;
          this.adminService.postNetworkUSAP(usap.selectOrg,
            newNetwork, usap.serie, usap.template, cantRequest, this.hash, this.listResultServer,
            autoBindValue, usap.listAP, usap.listSw);
        }, cantRequest * 1000
        );
      });


      // } else {
      //   Swal({
      //     title: 'Error por falta de USAP', text: 'Se tiene que completar con al menos con un USAP.',
      //     type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
      //   });
      // }
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
