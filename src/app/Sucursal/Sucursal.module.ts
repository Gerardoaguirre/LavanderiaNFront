import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SucursalRoutingModule } from './Sucursal-routing.module';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    // FooterComponent
  ],
  imports: [
    BrowserModule,
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