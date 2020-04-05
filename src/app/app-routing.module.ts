import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },{
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'Sucursal',
    loadChildren: ()=>import('./Sucursal/Sucursal.module').then(m=>m.SucursalModule)
  },
  {
    path: 'LavanderiaSuper',
    loadChildren: ()=>import('./Cliente/Cliente.module').then(m=>m.ClienteModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
