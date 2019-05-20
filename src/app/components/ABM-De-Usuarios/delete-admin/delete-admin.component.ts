import { Component, OnInit } from '@angular/core';
import { Organization } from 'src/app/class/organization';
import { OrganizacionesService } from 'src/app/services/organizaciones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-admin',
  templateUrl: './delete-admin.component.html',
  styleUrls: ['./delete-admin.component.css']
})
export class DeleteAdminComponent implements OnInit {

  hash = '*****';
  email = '1@educ.gov.ar';
  selectedAll: any;
  provinciasObj: Organization[] = [];
  constructor(private organizacionServi: OrganizacionesService) { }

  ngOnInit() {
    this.provinciasObj = this.organizacionServi.getOrganizacionesLocal();
  }

  selectAll() {
    for (let i = 0; i < this.provinciasObj.length; i++) {
      this.provinciasObj[i].selected = this.selectedAll;
    }
  }

  checkIfAllSelected() {
    this.selectedAll = this.provinciasObj.every(function (item: any) {
      return item.selected === true;
    });
  }

  enviar() {
    if (this.hash.length > 35) {
      const listProvSelected = this.provinciasObj.filter(prov => prov.selected === true);

      if (listProvSelected.length > 0) {
        listProvSelected.map((req) => {
          this.organizacionServi.deleteAdmin(req.id, this.email, this.hash);
        });
      } else {
        Swal({
          title: 'Error por falta de Provincia',
          text: 'Se tiene que seleccionar al menos una provincia.',
          type: 'error',
          confirmButtonText: 'Ok',
          cancelButtonColor: '#d33'
        });
      }
    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }
  }
}
