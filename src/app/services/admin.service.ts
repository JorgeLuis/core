import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AP, SW } from '../class/sw';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpMeraki: HttpClient) { }

  postOneNetwork(idOrg, networks, serial, template, cantRequest, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    console.log('Hash: ', hash);
    console.log('Cantidad de Request: ', cantRequest);
    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/';
    // console.log('URL: ', url);
    // console.log('Nuevo Predio ', networks);
    // console.log('Serial ', serial);
    // console.log('Template ', template);

    this.httpMeraki.post(url, networks, opciones)
      .toPromise().then(
        (data: any) => {
          console.log('POST Request is successful ', data);

          const newSerial = {
            'serial': serial
          };
          const urlClaim = 'https://api.meraki.com/api/v0/networks/' + data.id + '/devices/claim';
          console.log('urlClaim', urlClaim);

          this.httpMeraki.post(urlClaim, newSerial, opciones)
            .toPromise().then(
              data2 => {
                console.log('POST Request Serial is successful, N°' + cantRequest, data2);
              }, error => {
                console.log('Verificar el  post Claim N°' + cantRequest, error);
              });
          const urlTemplate = 'https://api.meraki.com/api/v0/networks/' + data.id + '/bind';
          const newTemplate = {
            'configTemplateId': template.id,
            'autoBind': false
          };

          console.log('TEMPLATE', template);
          this.httpMeraki.post(urlTemplate, newTemplate, opciones)
            .toPromise().then(
              data3 => {
                console.log('POST Request Template is successful N°' + cantRequest, data3);
              }, error => {

                Swal({
                  title: 'Success', text: 'Se creó el predio correctamente.',
                  type: 'success',
                  confirmButtonText: 'Ok',
                  cancelButtonColor: '#d33'
                });

                console.log('Verificar el  post Template N°' + cantRequest, error);
              });
        },
        error => {
          Swal({ title: 'Error', text: 'No se ha creado el predio.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
          console.log('Error post Network', error);
        }
      );
  }

  postNetwork(idOrg, networks, serial, template, cantRequest, hash, lista) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    console.log('Cantidad de Request: ', hash);
    console.log('Cantidad de Request: ', cantRequest);
    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/';
    console.log('URL: ', url);
    console.log('Nuevo Predio ', networks);
    // console.log('Serial ', serial);
    // console.log('Template ', template);

    setTimeout(async () => {
      await this.httpMeraki.post(url, networks, opciones)
        .toPromise().then(
          (data: any) => {
            console.log('POST Request is successful ', data);
            console.log('networks.name', networks.name);

            const newSerial = {
              'serial': serial
            };
            const urlClaim = 'https://api.meraki.com/api/v0/networks/' + data.id + '/devices/claim';
            console.log('urlClaim', urlClaim);

            setTimeout(async () => {
              await this.httpMeraki.post(urlClaim, newSerial, opciones)
                .toPromise().then(
                  data2 => {
                    console.log('POST Request Serial is successful, N°' + cantRequest, data2);
                  }, error => {
                    console.log('Verificar el  post Claim N°' + cantRequest, error);
                  });
              const urlTemplate = 'https://api.meraki.com/api/v0/networks/' + data.id + '/bind';
              const newTemplate = {
                'configTemplateId': template.id,
                'autoBind': false
              };

              setTimeout(async () => {
                console.log('TEMPLATE', template);
                await this.httpMeraki.post(urlTemplate, newTemplate, opciones)
                  .toPromise().then(
                    data3 => {
                      console.log('POST Request Template is successful N°' + cantRequest, data3);
                    }, error => {
                      console.log('Verificar el  post Template N°' + cantRequest, error);
                      const test2 = {
                        'nombre': networks.name,
                      };
                      lista.push(test2);
                    });
              }, cantRequest * 4000
              );
            }, cantRequest * 3000
            );
          },
          error => {
            Swal({ title: 'Error', text: 'No se ha creado un predio.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
            console.log('Error post Network', error);
          }
        );


    }, cantRequest * 2000
    );
  }


  postNetworkUSAP(idOrg, networks, serial, template, cantRequest, hash, lista, autoB, listAP: AP[], listSW: SW[]) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    // console.log('Cantidad de Request: ', hash);
    // console.log('Cantidad de Request: ', cantRequest);
    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/';
    // console.log('URL: ', url);
    // console.log('Nuevo Predio ', networks);
    // console.log('Serial ', serial);
    // console.log('Template ', template);
    setTimeout(async () => {

      this.httpMeraki.post(url, networks, opciones)
        .toPromise().then(
          (data: any) => {
            console.log('POST Request is successful ', data);
            console.log('networks.name', networks.name);

            const newSerial = { 'serial': serial };
            const urlClaim = 'https://api.meraki.com/api/v0/networks/' + data.id + '/devices/claim';
            console.log('urlClaim', urlClaim);

            setTimeout(async () => {
              await this.httpMeraki.post(urlClaim, newSerial, opciones)
                .toPromise().then(
                  data2 => {
                    console.log('POST Request Serial is successful, N°' + cantRequest, data2);
                  }, error => {
                    console.log('Verificar el  post Claim N°' + cantRequest, error);

                    listAP.filter((ap) => {
                      cantRequest++;
                      setTimeout(async () => {
                        const urlAP = 'https://api.meraki.com/api/v0/networks/' + data.id + '/devices/claim';
                        const newSerial2 = { 'serial': ap.title };

                        console.log(newSerial2);
                        await this.httpMeraki.post(urlAP, newSerial2, opciones)
                          .toPromise().then(
                            data2 => {
                              console.log('Add Serial, N°: ' + cantRequest, data2);
                            }, error2 => {
                              console.log('Verificar los AP: ' + cantRequest, error2);
                            });

                      }, cantRequest * 6000
                      );
                    });


                    listSW.filter((sw) => {
                      cantRequest++;
                      setTimeout(async () => {
                        const urlAP = 'https://api.meraki.com/api/v0/networks/' + data.id + '/devices/claim';
                        const newSerial2 = { 'serial': sw.title };

                        console.log(newSerial2);
                        await this.httpMeraki.post(urlAP, newSerial2, opciones)
                          .toPromise().then(
                            data2 => {
                              console.log('Add Serial, N°: ' + cantRequest, data2);
                            }, error2 => {
                              console.log('Verificar los SW: ' + cantRequest, error2);
                            });

                      }, cantRequest * 5000
                      );
                    });
                  });


              const urlTemplate = 'https://api.meraki.com/api/v0/networks/' + data.id + '/bind';
              const newTemplate = {
                'configTemplateId': template.id,
                'autoBind': autoB
              };

              setTimeout(async () => {
                console.log('A_A: TEMPLATE', newTemplate);
                await this.httpMeraki.post(urlTemplate, newTemplate, opciones)
                  .toPromise().then(
                    data3 => {
                      console.log('POST Request Template is successful N°' + cantRequest, data3);
                    }, error => {
                      console.log('A_A:  Verificar el  post Template N°' + cantRequest, error);
                      const test2 = {
                        'nombre': networks.name,
                      };
                      lista.push(test2);
                    });
              }, cantRequest * 10000
              );
            }, cantRequest * 4000
            );
          },
          error => {
            Swal({ title: 'Error', text: 'No se ha creado un predio.', type: 'error', confirmButtonText: 'Ok', cancelButtonColor: '#d33' });
            console.log('Error post Network', error);
          }
        );

    }, cantRequest * 3000
    );
  }

  deleteNetwork(idOrg, name, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/';
    // console.log('URL: ', url);
    // console.log('Name ', name);

    // POST /networks/[networkId]/devices/[serial]/remove

    return this.httpMeraki.get(url, opciones)
      .subscribe(
        (data: any) => {
          console.log('GET Request is successful ', data);
          const predio = data.filter((p: any) => p.name === name)[0];
          console.log('Predio ', predio);

          if (predio !== null || predio !== 'undefine') {
            const urlDelete = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/' + predio.id;
            console.log('urlDelete', urlDelete);
            console.log('Predio', predio.id);
            return this.httpMeraki.delete(urlDelete, opciones)
              .subscribe(() => {
                console.log('Borrado de Predio exitosamente');
                Swal({
                  title: 'Success', text: 'Se elimino el predio correctamente.',
                  type: 'success',
                  confirmButtonText: 'Ok',
                  cancelButtonColor: '#d33'
                });
              });
          }
        },
        error => {
          console.log('Error delete Network', error);
        }
      );
  }

  deleteNetworkUnClaim(idOrg, name, serial, hash, cantRequest, lista, nombre) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/';

    return this.httpMeraki.get(url, opciones)
      .toPromise().then(
        (data: any) => {
          console.log('GET Request is successful ', data);
          const predio = data.filter((p: any) => p.name === name)[0];
          console.log('Predio ', predio);

          setTimeout(async () => {
            if (predio !== null || predio !== 'undefine') {
              const urlDelete = 'https://api.meraki.com/api/v0/networks/' + predio.id + '/devices/' + serial + '/remove';

              console.log('A_A ', urlDelete);
              this.httpMeraki.post(urlDelete, {}, opciones)
                .toPromise().then(async () => {
                  setTimeout(() => {
                    console.log('Remove Z3');
                    const urlDeletePredio = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/' + predio.id;
                    this.httpMeraki.delete(urlDeletePredio, opciones)
                      .toPromise().then(() => {
                        console.log('Borrado de Predio exitosamente, N°:', cantRequest);
                        const test2 = {
                          'nombre': nombre,
                        };
                        lista.push(test2);
                      });
                  }, cantRequest * 4000
                  );
                });
            }
          }, cantRequest * 3000
          );
        },
        error => {
          console.log('Error delete Network', error);
        }
      );
  }

  deleteNetworkUSAP(name, selectOrg, hash, cantRequest, lista) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + selectOrg + '/networks/';

    return this.httpMeraki.get(url, opciones)
      .toPromise().then(
        (data: any) => {
          console.log('GET Request is successful ', data);
          const u = data.filter((p: any) => p.name === name)[0];
          console.log('Predio ', u);

          setTimeout(async () => {
            if (u !== null || u !== 'undefine') {
              const urlDelete = 'https://api.meraki.com/api/v0/networks/' + u.id + '/devices/' + name + '/remove';

              console.log('A_A urlDelete> ', urlDelete);
              this.httpMeraki.post(urlDelete, {}, opciones)
                .toPromise().then(async () => {
                  setTimeout(() => {
                    console.log('Remove USAP');
                    const urlDeletePredio = 'https://api.meraki.com/api/v0/organizations/' + selectOrg + '/networks/' + u.id;
                    this.httpMeraki.delete(urlDeletePredio, opciones)
                      .toPromise().then(() => {
                        console.log('Borrado de Predio exitosamente, N°:', cantRequest);
                        const test2 = {
                          'nombre': name,
                        };
                        lista.push(test2);
                      });
                  }, cantRequest * 4000
                  );
                });
            }
          }, cantRequest * 3000
          );
        },
        error => {
          console.log('Error delete Network', error);
        }
      );
  }

  deleteUsapMAsivo(name, idOrg, hash, cantRequest, lista) {
    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };
    setTimeout(async () => {

      const url = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/';
      // console.log('URL: ', url);
      // console.log('Name ', name);
      // POST /networks/[networkId]/devices/[serial]/remove

      this.httpMeraki.get(url, opciones)
        .subscribe(
          (data: any) => {
            // console.log('GET Request is successful ', data);
            const predio = data.filter((p: any) => p.name === name)[0];
            console.log('Predio ', predio);

            setTimeout(async () => {
              if (predio !== null || predio !== 'undefine') {
                const urlDelete = 'https://api.meraki.com/api/v0/organizations/' + idOrg + '/networks/' + predio.id;
                // console.log('urlDelete', urlDelete);
                // console.log('Predio', predio.id);
                 this.httpMeraki.delete(urlDelete, opciones)
                  .subscribe(() => {
                    console.log('Borrado de Predio exitosamente');
                    const test2 = {
                      'nombre': name,
                    };
                    lista.push(test2);
                  });
              }
            }, cantRequest * 6000
            );
          },
          error => {
            console.log('Error delete Network', error);
          }
        );

    }, cantRequest * 3000
    );

  }

  getTemplate(id: any, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': 'b60a999c25774afe10be110998ffcf365368be78',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const urlTemplate = 'https://api.meraki.com/api/v0/organizations/' + id + '/configTemplates';
    console.log('URL TEMPLATE:', urlTemplate);
    return this.httpMeraki.get(urlTemplate, opciones);
  }

  getPrediosByName(orgId, hash) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const url = 'https://api.meraki.com/api/v0/organizations/' + orgId + '/networks';
    console.log('URL: ', url);

    return this.httpMeraki.get(url, opciones);
  }


  putNamePredios(new_name, new_NetId, hash, cantRequest, lista, listaSize) {
    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': hash,
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const nuevoNombrePredio = { 'name': new_name };

    const url = 'https://api.meraki.com/api/v0/networks/' + new_NetId;
    console.log('URL: ', url);

    return this.httpMeraki.put(url, nuevoNombrePredio, opciones).toPromise().then(
      data2 => {
        cantRequest = cantRequest + 1000;
        console.log('Edición Correcta en el registro: ' + cantRequest);
        if (listaSize === 1) {
          Swal({
            title: 'Success', text: 'Se renombro correctamente el predio.',
            type: 'success', confirmButtonText: 'Ok', cancelButtonColor: '#d33'
          });
        } else {
          const test2 = {
            'nombre': new_name,
            'valor': true
          };
          lista.push(test2);
        }

      }, error => {
        console.log('Verificar edición en el registro: ' + cantRequest);
      });
  }
}
