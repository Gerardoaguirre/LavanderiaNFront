import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderMenuComponent } from './header-menu.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    HeaderMenuComponent
  ],
  imports: [
    // BrowserModule
    // AppRoutingModule
  ],
  exports:[
    HeaderMenuComponent
  ],
  providers: [],
  bootstrap: [HeaderMenuComponent]
})
export class MenuModule { }