import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { OrganizacionTableComponent } from './components/organizacion-table/organizacion-table.component';
import { MenuComponent } from './share/menu/menu.component';
import { AbmUsuariosComponent } from './components/ABM-De-Usuarios/abm-usuarios/abm-usuarios.component';
import { AltaPrediosComponent } from './components/Alta-De-Predios/alta-predios/alta-predios.component';
import { BajaPrediosComponent } from './components/Baja-DePredios/baja-predios/baja-predios.component';
import { TopConsumoComponent } from './components/top-consumo/top-consumo.component';
import { RepoAdminComponent } from './components/ABM-De-Usuarios/repo-admin/repo-admin.component';
import { AdminByIdComponent } from './components/ABM-De-Usuarios/admin-by-id/admin-by-id.component';
import { EditAdminComponent } from './components/ABM-De-Usuarios/edit-admin/edit-admin.component';
import { LicenciaComponent } from './components/Licencias/licencia/licencia.component';
import { DeleteAdminComponent } from './components/ABM-De-Usuarios/delete-admin/delete-admin.component';
import { EdicionComponent } from './components/Edicion-De-Predios/edicion/edicion.component';
// import { BajaMasivaComponent } from './components/Baja-DePredios/baja-masiva/baja-masiva.component';


export const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  // { path: 'organizaciones', component: OrganizacionTableComponent },
  { path: 'new/admin', component: AbmUsuariosComponent },
  { path: 'delete/admin', component: DeleteAdminComponent },
  { path: 'alta', component: AltaPrediosComponent },
  { path: 'baja', component: BajaPrediosComponent },
  { path: 'edit/predio', component: EdicionComponent },
  { path: 'consumo', component: TopConsumoComponent },
  { path: 'repo', component: RepoAdminComponent },
  { path: 'admin', component: AdminByIdComponent },
  { path: 'licencias', component: LicenciaComponent },
  { path: 'edit/:idOrg/:idAdm', component: EditAdminComponent },
  // { path: 'masivaAlta', component: AltaMasivaComponent },
  // { path: 'masivaBaja', component: BajaMasivaComponent },
  { path: '**', redirectTo: '/menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MenuComponent, TopConsumoComponent, LicenciaComponent,
  RepoAdminComponent, BajaPrediosComponent, AltaPrediosComponent, AbmUsuariosComponent, EdicionComponent
  // ,OrganizacionTableComponent
];
