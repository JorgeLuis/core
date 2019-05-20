import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrganizacionesService } from '../app/services/organizaciones.service';
import { AppComponent } from './app.component';
import 'hammerjs';
import { ChartsModule } from 'ng2-charts';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ToolbarComponent } from './share/toolbar/toolbar.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



import {
  MatFormFieldModule, MatInputModule, MatPaginatorModule,
  MatTableModule, MatSortModule, MatCardModule, MatGridListModule, MatSelectModule,
  MatCheckboxModule, MatButtonModule, MatSnackBarModule, MatRadioModule, MatTreeModule
} from '@angular/material';


import { AltaPrediosComponent } from './components/Alta-De-Predios/alta-predios/alta-predios.component';
import { BajaPrediosComponent } from './components/Baja-DePredios/baja-predios/baja-predios.component';
import { TopConsumoComponent } from './components/top-consumo/top-consumo.component';
// import { MatTableDataSource } from '@angular/material';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SortPipe } from './pipes/sort.pipe';
import { AbmUsuariosComponent } from './components/ABM-De-Usuarios/abm-usuarios/abm-usuarios.component';
import { RepoAdminComponent } from './components/ABM-De-Usuarios/repo-admin/repo-admin.component';
import { AdminByIdComponent } from './components/ABM-De-Usuarios/admin-by-id/admin-by-id.component';
import { EditAdminComponent } from './components/ABM-De-Usuarios/edit-admin/edit-admin.component';
import { AltaPrediosZ3Component } from './components/Alta-De-Predios/alta-predios-z3/alta-predios-z3.component';
import { AltaPrediosUsapComponent } from './components/Alta-De-Predios/alta-predios-usap/alta-predios-usap.component';
import { AltaMasivaComponent } from './components/Alta-De-Predios/alta-masiva/alta-masiva.component';
import { BajaMasivaComponent } from './components/Baja-DePredios/baja-masiva/baja-masiva.component';
import { BajaUnicaComponent } from './components/Baja-DePredios/baja-unica/baja-unica.component';
import { LoginComponent } from './share/Login-Register/Login/login.component';
import { RegistrerComponent } from './share/Login-Register/registrer/registrer.component';
import { MenuComponent } from './share/menu/menu.component';
import { LicenciaComponent } from './components/Licencias/licencia/licencia.component';
import { DeleteAdminComponent } from './components/ABM-De-Usuarios/delete-admin/delete-admin.component';
import { MasivaComponent } from './components/Edicion-De-Predios/masiva/masiva.component';
import { UnicaComponent } from './components/Edicion-De-Predios/unica/unica.component';
import { EdicionComponent } from './components/Edicion-De-Predios/edicion/edicion.component';
import { BusquedaComponent } from './components/Edicion-De-Predios/busqueda/busqueda.component';
import { AltaMasivaUsapComponent } from './components/Alta-De-Predios/alta-masiva-usap/alta-masiva-usap.component';
import { BajaMasivaUsapComponent } from './components/Baja-DePredios/baja-masiva-usap/baja-masiva-usap.component';
import { BajaPredioUsapComponent } from './components/Baja-DePredios/baja-predio-usap/baja-predio-usap.component';

import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ToolbarComponent,
    MenuComponent,
    AbmUsuariosComponent,
    AltaPrediosComponent,
    BajaPrediosComponent,
    TopConsumoComponent,
    SortPipe,
    RepoAdminComponent,
    AdminByIdComponent,
    EditAdminComponent,
    AltaPrediosZ3Component,
    AltaPrediosUsapComponent,
    AltaMasivaComponent,
    BajaMasivaComponent,
    BajaUnicaComponent,
    LoginComponent,
    RegistrerComponent,
    LicenciaComponent,
    DeleteAdminComponent,
    MasivaComponent,
    UnicaComponent,
    EdicionComponent,
    BusquedaComponent,
    AltaMasivaUsapComponent,
    BajaMasivaUsapComponent,
    BajaPredioUsapComponent

  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatToolbarModule,
    MatIconModule, MatSidenavModule,
    MatFormFieldModule, MatSnackBarModule,
    MatTableModule, MatSelectModule, MatButtonModule,
    MatCardModule, MatGridListModule, MatTreeModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule, MatRadioModule,
    MDBBootstrapModule.forRoot(),
    ChartsModule

  ],
  providers: [OrganizacionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
