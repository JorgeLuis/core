import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

import {
  urlBsAs, urlBsAs2, urlBsAs3, urlBsAs4, urlCABA, urlCatamarca, urlChaco, urlChubut, urlCordoba, urlCorrientes,
  urlEducar20, urlEntreRios, urlFormosa, urlJujuy, urlLaPampa, urlLaRioja, urlMendoza, urlMisiones, urlNeuquen,
  urlRioNegro, urlSalta, urlSanJuan, urlSanLuis, urlSantaCruz, urlSantaFe, urlSGO, urlTFuego, urlTucuman
} from '../../../url';

// import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Admin } from 'src/app/class/Admin';

export interface Access {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-repo-admin',
  templateUrl: './repo-admin.component.html',
  styleUrls: ['./repo-admin.component.css']
})
export class RepoAdminComponent implements OnInit {

  hash = '*****';
  accessOrganization: Access[] = [
    { value: 'none', viewValue: 'None' },
    { value: 'read-only', viewValue: 'Read Only' },
    { value: 'full', viewValue: 'Full' }
  ];
  selectedOrg = 'full';
  allAdmin: Admin[] = [];
  filtrados = [];
  emailBusqueda = '1@educ.gov.ar';


  listResultServer: Access[] = [];

  constructor(
    private httpMeraki: HttpClient,
    private router: Router) { }

  ngOnInit() {
  }

  getAdmins() {
    if (this.hash.length > 35) {
      this.listResultServer = [];
      const opciones = {
        headers: new HttpHeaders({
          'X-Cisco-Meraki-API-Key': this.hash,
          'Content-Type': 'application/json; charset=utf-8',
          'Accept': 'application/json'
        })
      };
      this.allAdmin = [];
      this.httpMeraki.get(urlBsAs, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'BUENOS AIRES #1',
            idProv: '708233'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter((adm: any) => adm.email === this.emailBusqueda);

        if (this.filtrados.length === 0) {
          const provName = { value: 'BUENOS AIRES #1', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
        console.log(this.filtrados);
      });


      this.httpMeraki.get(urlBsAs2, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'BUENOS AIRES #2',
            idProv: '635570497412661753'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'BUENOS AIRES #2', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlBsAs3, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'BUENOS AIRES #3',
            idProv: '635570497412661754'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'BUENOS AIRES #3', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlBsAs4, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'BUENOS AIRES #4',
            idProv: '635570497412661755'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'BUENOS AIRES #4', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlCABA, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'CABA',
            idProv: '635570497412661759'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'CABA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlCatamarca, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'CATAMARCA',
            idProv: '635570497412661756'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'CATAMARCA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }

      });


      this.httpMeraki.get(urlChaco, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'CHACO',
            idProv: '635570497412661757'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'CHACO', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlChubut, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'CHUBUT',
            idProv: '635570497412661758'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'CHUBUT', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlCordoba, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'CORDOBA',
            idProv: '635570497412661760'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'CORDOBA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlCorrientes, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'CORRIENTES',
            idProv: '635570497412661761'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'CORRIENTES', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlEducar20, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'EDUCAR_20',
            idProv: '689613692941107203'
          };
          console.log('EDUCAR20:  ' + adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'EDUCAR_20', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlEntreRios, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'ENTRE RIOS',
            idProv: '635570497412661762'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'ENTRE RIOS', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlFormosa, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'FORMOSA',
            idProv: '635570497412661763'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'FORMOSA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlJujuy, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'JUJUY',
            idProv: '635570497412661764'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'JUJUY', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });



      this.httpMeraki.get(urlLaPampa, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'LA PAMPA',
            idProv: '635570497412661765'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'LA PAMPA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });



      this.httpMeraki.get(urlLaRioja, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'LA RIOJA',
            idProv: '635570497412661766'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'LA RIOJA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlMendoza, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'MENDOZA',
            idProv: '635570497412661767'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'MENDOZA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlMisiones, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'MISIONES',
            idProv: '635570497412661768'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'MISIONES', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlNeuquen, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'NEUQUEN',
            idProv: '635570497412661769'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'NEUQUEN', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlRioNegro, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'RIO NEGRO',
            idProv: '635570497412661770'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'RIO NEGRO', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlSalta, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'SALTA',
            idProv: '635570497412661771'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'SALTA', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlSanJuan, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'SAN JUAN',
            idProv: '635570497412661772'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'SAN JUAN', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlSanLuis, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'SAN LUIS',
            idProv: '635570497412661773'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'SAN LUIS', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlSantaCruz, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'SANTA CRUZ',
            idProv: '635570497412661774'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'SANTA CRUZ', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlSantaFe, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'SANTA FE',
            idProv: '635570497412661775'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'SANTA FE', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlSGO, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'SGO. DEL ESTERO',
            idProv: '635570497412661776'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'SGO. DEL ESTERO', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });


      this.httpMeraki.get(urlTFuego, opciones).subscribe((data: Admin[]) => {
        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'TIERRA DEL FUEGO',
            idProv: '635570497412661777'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'TIERRA DEL FUEGO', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });

      this.httpMeraki.get(urlTucuman, opciones).subscribe((data: Admin[]) => {

        data.map((d) => {
          const adm: any = {
            id: d.id,
            name: d.name,
            networks: d.networks,
            tags: d.tags,
            orgAccess: d.orgAccess,
            email: d.email,
            prov: 'TUCUMAN',
            idProv: '635570497412661778'
          };
          // console.log(adm);
          this.allAdmin.push(adm);

        });
        this.filtrados = this.allAdmin.filter(adm => adm.email === this.emailBusqueda);
        // console.log(this.allAdmin.length);
        // console.log(this.filtrados);
        if (this.filtrados.length === 0) {
          const provName = { value: 'TUCUMAN', viewValue: 'None' };
          this.listResultServer.push(provName);
        }
      });
    } else {
      Swal({ title: 'Error', text: 'Falta completar con el Hash.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
    }
  }


  editar(admin) {
    this.router.navigate(['/edit', admin.idProv, admin.id]);
  }
}
