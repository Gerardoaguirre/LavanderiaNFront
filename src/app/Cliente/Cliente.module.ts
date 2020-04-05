import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClienteRoutingModule } from './Cliente-routing.module';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../share/header/header-menu.module';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './Cliente.component';


@NgModule({
  declarations: [
    ClienteComponent
  ],
  imports: [
    ClienteRoutingModule,
    // BrowserModule,
    // CommonModule,
    // RouterModule,
    MenuModule
    // AppRoutingModule
  ],
  exports:[
    // FooterComponent
  ],
  providers: []
//   bootstrap: [FooterComponent]
})
export class ClienteModule { }