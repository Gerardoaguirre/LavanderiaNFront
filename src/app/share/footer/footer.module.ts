import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer.component';

// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule
    // AppRoutingModule
  ],
  exports:[
    FooterComponent
  ],
  providers: []
//   bootstrap: [FooterComponent]
})
export class FooterModule { }