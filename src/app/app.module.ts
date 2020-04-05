import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './share/header/header-menu.module';
import { FooterModule } from './share/footer/footer.module';
import { HomeComponent } from './home/home.component';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    // MenuModule,
    FooterModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
