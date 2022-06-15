import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PvsComponent } from './components/pvs/pvs.component';
import { AddPvComponent } from './components/add-pv/add-pv.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AddDataPartieComponent } from './components/add-data-partie/add-data-partie.component';

@NgModule({
  declarations: [
    AppComponent,
    PvsComponent,
    AddPvComponent,
    SideNavBarComponent,
    NavbarComponent,
    FooterComponent,
    AddDataPartieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
