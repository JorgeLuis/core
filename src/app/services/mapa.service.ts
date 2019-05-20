import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as mapboxgl from 'mapbox-gl';

@Injectable({
  providedIn: 'root'
})
export class MapaService {

  urlImgVerde = '../assets/img/punto-verde2.png';
  constructor(private httpMeraki: HttpClient) { }

  getPredios(mapa: mapboxgl.Map, contProv) {

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': 'b60a999c25774afe10be110998ffcf365368be78',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    const urlTemplate = 'https://api.meraki.com/api/v0/organizations/708233/networks';
    return this.httpMeraki.get(urlTemplate, opciones)
      .toPromise().then(
        (data: any) => {
          // console.log(data);

          const listaIdNetwork = [];
          data.map(e => {
            const test2 = {
              'id': e.id,
              'name': e.name,
              'type': e.type
            };
            listaIdNetwork.push(test2);
          });

          // console.log(listaIdNetwork);
          this.getLtdLgd(listaIdNetwork, mapa, contProv);
        }, error => {
          console.log('Error del Server' + error);
        });
  }

  getLtdLgd(listaIdNetwork, mapa: mapboxgl.Map, contProv: number) {

    const test = listaIdNetwork.slice(0, 10);
    console.log(test);

    const opciones = {
      headers: new HttpHeaders({
        'X-Cisco-Meraki-API-Key': 'b60a999c25774afe10be110998ffcf365368be78',
        'Content-Type': 'application/json; charset=utf-8',
        'Accept': 'application/json'
      })
    };

    let cant = 0;
    test.map(e => {
      const urlTemplate = 'https://api.meraki.com/api/v0/networks/' + e.id + '/devices';
      console.log(urlTemplate);
      cant = cant + 1;
      contProv = + 1;

      setTimeout(async () => {
        this.httpMeraki.get(urlTemplate, opciones)
          .toPromise().then(
            (data: any) => {
              // console.log(data[0]);

              const el = document.createElement('div');
              el.style.backgroundImage = 'url(' + this.urlImgVerde + ')';
              el.style.padding = '20px';
              el.style.width = '5px';
              el.style.cursor = 'pointer';
              el.style.transition = '0.3s ease all';
              el.style.backgroundRepeat = 'no-repeat';

              console.log('Cargadas: ' + contProv);
              console.log('Cantidad: ' + cant);

              new mapboxgl.Marker({color: 'green'})
                .setLngLat({ lng: data[0].lng, lat: data[0].lat })
                .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
                  .setHTML('<h3>' + 'Escuela en Misiones' + '</h3><p>' + 'Un lugar donde se aprende mucho.' + '</p>'))
                .addTo(mapa);
            });
      }, cant * 1000
      );
    });
  }

}
