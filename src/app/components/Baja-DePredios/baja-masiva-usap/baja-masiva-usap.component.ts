import { Component, OnInit } from '@angular/core';
import { Access } from '../../ABM-De-Usuarios//repo-admin/repo-admin.component';
import { SwDataService } from 'src/app/services/sw-data.service';
import { NomYnumSerie, UtmUsap, UtmUsapAlta } from 'src/app/class/sw';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { RequestResult } from '../../Alta-De-Predios/alta-masiva/alta-masiva.component';

@Component({
  selector: 'app-baja-masiva-usap',
  templateUrl: './baja-masiva-usap.component.html',
  styleUrls: ['./baja-masiva-usap.component.css']
})
export class BajaMasivaUsapComponent implements OnInit {

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

  hash = 'b60a999c25774afe10be110998ffcf365368be78';
  name = 'Test 1';
  selectedOrg = '689613692941107203';
  listResultServer: RequestResult[] = [];
  newUtmUsap = new UtmUsapAlta();

  constructor(private dataServie: SwDataService, private adminService: AdminService) { }

  addTodosUSAP() {
    this.newUtmUsap.name = this.name;
    this.newUtmUsap.selectOrg = this.selectedOrg;
    this.newUtmUsap.selectString = this.organizaciones.filter((u) => u.value === this.selectedOrg)[0].viewValue;
    // Validar si tiene duplicados la lista XP
    const lista = this.dataServie.getAllTodosUSAPAlta();
    const element1 = lista.filter(data => data.name === this.name)[0];

    if (element1 !== undefined) {
      Swal({
        title: 'Error por Duplicado',
        text: 'El nombre esta repetido.',
        type: 'error',
        confirmButtonText: 'Ok',
        cancelButtonColor: '#d33'
      });
    } else {
      console.log(this.newUtmUsap);
      this.dataServie.addTodoUSAPAlta(this.newUtmUsap);
      this.newUtmUsap = new UtmUsapAlta();
      this.name = 'Test 1';
      this.selectedOrg = '689613692941107203';
    }
  }

  get todosUSAP() {
    return this.dataServie.getAllTodosUSAPAlta();
  }

  removeUSAP(usap) {
    this.dataServie.deleteTodoUSAPAlta(usap.id);
  }
  ngOnInit() {
    this.dataServie.deleteAllUsap();
  }

  enviar() {
    if (this.hash.length > 35) {
      let cantRequest = 1;
      const listaMaster = this.dataServie.getAllTodosUSAPAlta();

      if (listaMaster.length > 0) {
        listaMaster.filter(u => {
          cantRequest++;
          // console.log(u.name, u.selectString, u.selectOrg);
          this.adminService.deleteUsapMAsivo(
            u.name, u.selectOrg, this.hash, cantRequest, this.listResultServer);
          console.log('----------' + cantRequest + '----------');
        });

        this.dataServie.deleteAllUsap();
      } else {
        Swal({
          title: 'Error', text: 'Falta completar con los datos de red USAP.',
          type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
        });
      }

    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }

  }
}
