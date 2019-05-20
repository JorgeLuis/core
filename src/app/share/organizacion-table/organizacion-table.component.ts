import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Organization } from '../../class/organization';
import { OrganizacionesService } from '../../services/organizaciones.service';

export interface PeriodicElement {
  name: string;
  id: number;
  // weight: number;
  // symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
//   { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
//   { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
//   { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
//   { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
//   { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
//   { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
//   { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
//   { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
//   { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
// ];

const ELEMENT_DATA: PeriodicElement[] = [
  { "id": 708233, "name": "BUENOS AIRES #1" }, 
  { "id": 635570497412661775, "name": "SANTA FE" }, 
  { "id": 635570497412661771, "name": "SALTA" }, 
  { "id": 635570497412661764, "name": "JUJUY" }, 
  { "id": 635570497412661763, "name": "FORMOSA" }, 
  { "id": 635570497412661756, "name": "CATAMARCA" }, 
  { "id": 635570497412661755, "name": "BUENOS AIRES #4" }, 
  { "id": 635570497412661776, "name": "SGO. DEL ESTERO" }, 
  { "id": 635570497412661770, "name": "RIO NEGRO" }, 
  { "id": 635570497412661768, "name": "MISIONES" }, 
  { "id": 635570497412661765, "name": "LA PAMPA" }, 
  { "id": 635570497412661761, "name": "CORRIENTES" }, 
  { "id": 635570497412661758, "name": "CHUBUT" }, 
  { "id": 635570497412661754, "name": "BUENOS AIRES #3" }, 
  { "id": 635570497412661778, "name": "TUCUMAN" }, 
  { "id": 635570497412661773, "name": "SAN LUIS" }, 
  { "id": 635570497412661772, "name": "SAN JUAN" }, 
  { "id": 635570497412661760, "name": "CORDOBA" }, 
  { "id": 635570497412661757, "name": "CHACO" }, 
  { "id": 635570497412661753, "name": "BUENOS AIRES #2" }, 
  { "id": 635570497412661762, "name": "ENTRE RIOS" }, 
  { "id": 635570497412661767, "name": "MENDOZA" }, 
  { "id": 635570497412661769, "name": "NEUQUEN" }, 
  { "id": 635570497412661774, "name": "SANTA CRUZ" }, 
  { "id": 635570497412661777, "name": "TIERRA DEL FUEGO" }, 
  { "id": 635570497412661766, "name": "LA RIOJA" }, 
  { "id": 635570497412661759, "name": "CABA" }
];



@Component({
  selector: 'app-organizacion-table',
  templateUrl: './organizacion-table.component.html',
  styleUrls: ['./organizacion-table.component.css']
})
export class OrganizacionTableComponent implements OnInit {

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  displayedColumns: string[] = ['id', 'name'];

  constructor(private organizacionServi: OrganizacionesService) { }

  ngOnInit() {
    // this.organizacionServi.getAllOrganizaziones().subscribe((resp: any) => {
    //   console.log(resp._body);
      // this.dataSource  = JSON.parse(resp._body);
    // });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
