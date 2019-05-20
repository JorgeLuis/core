import { Component, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapaService } from 'src/app/services/mapa.service';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label } from 'ng2-charts';
// import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-top-consumo',
  templateUrl: './top-consumo.component.html',
  styleUrls: ['./top-consumo.component.css']
})
export class TopConsumoComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;
  reason = '';
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  public pieChartOptions: ChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const label = ctx.chart.data.labels[ctx.dataIndex];
          return label;
        },
      },
    }
  };
  public pieChartLabels: Label[] = [['Download', 'Sales'], 'In-Store Sales', 'Mail Sales'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  // public pieChartPlugins = [pluginDataLabels];

  mapa: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = -34.603683;
  lng = -58.381557;
  message = 'Bs As';
  title = this.message;
  cantProv = 0;
  constructor(private mapaServie: MapaService) {
    Object.getOwnPropertyDescriptor(mapboxgl, 'accessToken')
      .set('pk.eyJ1Ijoiamxlc2Nhbm8iLCJhIjoiY2pzb3A1dzlyMHA1eTN5cDlsZDQycGh0cCJ9.g5HDhLFTrAjO4X0WRF2Kcw');

    console.log(mapboxgl);
  }

  ngOnInit(): void {

    // this.mapa = new mapboxgl.Map({
    //   container: 'mapa',
    //   style: this.style,
    //   center: [this.lng, this.lat],
    //   zoom: 10
    // });


    // console.log('A_A: ' + el.className);
    // this.mapa.addControl(new mapboxgl.NavigationControl());

    // const networks = this.mapaServie.getPredios(this.mapa, this.cantProv);
    // console.log(networks);
  }

  changeZone(a: any) {

    console.log(a);
    if (a === 1) {
      this.lat = -27.497470;
      this.lng = -64.855340;
    } else if (a === 2) {
      this.lat = -34.603683;
      this.lng = -58.381557;
    } else if (a === 3) {
      this.lat = 19.988120;
      this.lng = -98.876300;
    }

    this.mapa.setZoom(9);
    this.mapa.setCenter({ lng: this.lng, lat: this.lat });
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  changeLabels() {
    const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
      'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
      'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
      'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
      'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
    const randomWord = () => words[Math.trunc(Math.random() * words.length)];
    this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }



}
