import { Component, OnInit } from '@angular/core';
import { Access } from '../../ABM-De-Usuarios//repo-admin/repo-admin.component';
import { SwDataService } from 'src/app/services/sw-data.service';
import { NomYnumSerie } from 'src/app/class/sw';
import { AdminService } from 'src/app/services/admin.service';
import Swal from 'sweetalert2';
import { RequestResult } from '../../Alta-De-Predios/alta-masiva/alta-masiva.component';

@Component({
  selector: 'app-baja-masiva',
  templateUrl: './baja-masiva.component.html',
  styleUrls: ['./baja-masiva.component.css']
})
export class BajaMasivaComponent implements OnInit {

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
  name = 'API Test - Network';
  selectedOrg = '689613692941107203';
  serieZ3 = 'Q2TN-';
  listResultServer: RequestResult[] = [];
  newTodoNombreYNum = new NomYnumSerie();

  constructor(private dataServie: SwDataService, private adminService: AdminService) { }

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
  ngOnInit() {
  }

  enviar() {
    if (this.hash.length > 35) {

      // const listaMaster: NomYnumSerie[] = [
      //   { nombre: 'Test 11', serie: 'Q2TN-C47N-R5YC', complete: false, id: 1 },
      //   { nombre: 'Test 22', serie: 'Q2TN-QN3C-HGPD', complete: false, id: 2 },
      //   { nombre: 'Test 33', serie: 'Q2TN-REKA-LBL2', complete: false, id: 3 },
      //   { nombre: 'Test 44', serie: 'Q2TN-P5E8-ZZQY', complete: false, id: 4 },
      //   { nombre: 'Test 55', serie: 'Q2TN-LHAL-NPTG', complete: false, id: 5 },
      //   { nombre: 'Test 66', serie: 'Q2TN-LMFC-Y8EY', complete: false, id: 6 },
      //   { nombre: 'Test 77', serie: 'Q2TN-CHS2-ELG3', complete: false, id: 7 }
      // ];
      // console.log('A_A Lista: ', listaMaster);
      let cantRequest = 0;
      const lista = this.dataServie.getAllTodosSeries();

      if (lista.length > 0) {
        lista.filter(predio => {
          cantRequest++;
          // console.log(this.selectedOrg, predio.nombre, predio.serie);
          this.adminService.deleteNetworkUnClaim(this.selectedOrg,
            predio.nombre, predio.serie, this.hash, cantRequest, this.listResultServer, predio.nombre);
          console.log('----------' + cantRequest + '----------');
        });
      } else {
        Swal({
          title: 'Error', text: 'Falta completar con los nombres y seriales de los Z3.',
          type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
        });
      }

    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }

  }
}
