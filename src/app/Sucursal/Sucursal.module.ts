import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SucursalRoutingModule } from './Sucursal-routing.module';
import { SucursalComponent } from './Sucursal.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
    SucursalComponent
  ],
  imports: [
    // BrowserModule,
    SucursalRoutingModule
    // AppRoutingModule
  ],
  exports:[
    // FooterComponent
  ],
  providers: []
//   bootstrap: [FooterComponent]
})
export class SucursalModule { }