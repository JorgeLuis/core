import { Component, OnInit } from '@angular/core';
import { Access, NomYNewNombre } from 'src/app/class/sw';
import { AdminService } from 'src/app/services/admin.service';
import { SwDataService } from 'src/app/services/sw-data.service';
import Swal from 'sweetalert2';
import { RequestResult } from '../../Alta-De-Predios/alta-masiva/alta-masiva.component';

@Component({
  selector: 'app-masiva',
  templateUrl: './masiva.component.html',
  styleUrls: ['./masiva.component.css']
})
export class MasivaComponent implements OnInit {

  hash = 'b60a999c25774afe10be110998ffcf365368be78';
  listResultServer: RequestResult[] = [];
  nameNewName = new NomYNewNombre;
  name = 'Nombre';
  newName = 'Nuevo Nombre';
  selectedOrg = '689613692941107203';
  renombrar = [];

  selectType = 'appliance';
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
  cantRequest = 0;
  constructor(private dataServie: SwDataService, private adminService: AdminService) { }

  ngOnInit() {
  }

  addTodoSW() {
    this.nameNewName.name = this.name;
    this.nameNewName.newName = this.newName;

    // Validar si tiene duplicados la lista XP
    const lista = this.dataServie.getAllTodosNewName();
    const element1 = lista.filter(data => data.name === this.name)[0];
    const element2 = lista.filter(data => data.newName === this.newName)[0];

    if (element1 !== undefined || element2 !== undefined) {
      Swal({
        title: 'Error por Duplicado',
        text: 'El nombre o el serial esta repetido.',
        type: 'error',
        confirmButtonText: 'Ok',
        cancelButtonColor: '#d33'
      });
    } else {
      console.log(this.nameNewName);
      this.dataServie.addTodoNewName(this.nameNewName);
      this.nameNewName = new NomYNewNombre();
      this.name = 'Nombre';
      this.newName = 'Nuevo Nombre';
    }
  }

  get todosNewNames() {
    return this.dataServie.getAllTodosNewName();
  }

  removeNewNames(n) {
    this.dataServie.deleteTodoNewName(n.id);
  }

  enviar() {
    this.listResultServer = [];
    if (this.hash.length > 35) {
      // const lista = [
      //   { 'name': 'Test 1', 'newName': 'Test 11' },
      //   { 'name': 'Test 2', 'newName': 'Test 22' },
      //   { 'name': 'Test 3', 'newName': 'Test 33' },
      //   { 'name': 'Test 4', 'newName': 'Test 44' },
      //   { 'name': 'Test 5', 'newName': 'Test 55' },
      //   { 'name': 'Test 6', 'newName': 'Test 66' },
      //   { 'name': 'Test 7', 'newName': 'Test 77' }
      // ];
      const lista = this.dataServie.getAllTodosNewName();
      const listaSize = lista.length;

      if (listaSize > 0) {
        this.cantRequest = 0;
        lista.filter((n) => {

          this.adminService.getPrediosByName(this.selectedOrg, this.hash)
            .toPromise().then(
              (data: any) => {
                // console.log(data);
                this.renombrar = data.filter(e => e.name === n.name && e.type === this.selectType);

                if (this.renombrar.length > 0) {
                  const new_name = n.newName;
                  const new_NetId = this.renombrar[0].id;

                  setTimeout(async () => {
                    this.cantRequest++;
                    console.log('Name: ' + new_name + ' NetId: ' + new_NetId + ' en el registro: ' + this.cantRequest);
                    this.adminService.putNamePredios(new_name, new_NetId, this.hash, this.cantRequest, this.listResultServer, listaSize);
                  }, this.cantRequest * 2000
                  );
                } else {

                  if ( listaSize === 1) {
                    Swal({
                      title: 'El o los nombres de los predios no existen en la provincia',
                      text: 'Verifique los nombres y sus Type Network',
                      type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
                    });
                  } else {
                      const test2 = {
                        'nombre': n.name,
                        'predio': '',
                        'template': '',
                        'valor': false
                      };
                      this.listResultServer.push(test2);
                  }
                }

              });
        }
        );
      } else {
        Swal({
          title: 'Error', text: 'Falta completar los nombres y sus correspondientes renombres.',
          type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
        });
      }

    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }

  }
}
