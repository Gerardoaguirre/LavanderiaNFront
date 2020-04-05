// import { AuthGuard } from "../../auth/guards/auth.guard";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ClienteComponent } from './Cliente.component';




const routes: Routes = [
  {
    path: '',
    component: ClienteComponent, //componente padre
    // canActivate:[AuthGuard],
    children: [
    //   { path: 'SeguimientoporFolio', component : SeguimFolioComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }