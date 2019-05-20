import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganizacionesService } from 'src/app/services/organizaciones.service';
import { Admin } from 'src/app/class/Admin';


export interface Access {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent implements OnInit {

  // nombre = 'Jorge Luis Lescano';
  // email = 'email@gmail.com';
  admin: Admin;
  idOrg: any;
  idAdm: any;
  hash = '*****';
  checkedAlta = true;
  checkedCRM = true;
  checkedLAB = false;
  checkedZETA3 = false;

  accessTempate: Access[] = [
    { value: 'full', viewValue: 'Full' },
    { value: 'read-only', viewValue: 'Read-Only' },
    { value: 'monitor-only', viewValue: 'Monitor-only' },
    { value: 'guest-ambassador', viewValue: 'Guest Ambassador' }
  ];

  accessOrganization: Access[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'read-only', viewValue: 'Read Only' },
    { value: 'full', viewValue: 'Full' }
  ];
  constructor(private router: ActivatedRoute,
    private organizacionServi: OrganizacionesService) {

    this.router.params.subscribe(params => {
      // console.log(params['idOrg']);
      // console.log(params['idAdm']);
      this.idAdm = params['idAdm'];
      this.idOrg = params['idOrg'];

    });
  }

  ngOnInit() {
    this.organizacionServi.getAdminByID(this.idOrg, 'b60a999c25774afe10be110998ffcf365368be78')
      .subscribe(
        (data: Array<any>) => {
          // console.log('GET by Id Request is successful ', data);
          this.admin = data.filter((e: any) => e.id === this.idAdm)[0];
          // console.log('this.admin', this.admin);
        },
        error => {
          console.log('Error in GET by Id Request', error);
        }
      );
  }

  editar() {
    this.organizacionServi.putAdmin(this.admin, this.idOrg, this.hash);
  }
}
